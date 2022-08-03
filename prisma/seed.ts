import {
    Direction,
    PrismaClient,
    RouteType,
    WheelchairAccessible,
    RouteCategory,
} from '@prisma/client'
import axios from 'axios'
import AdmZip from 'adm-zip'
import csv from 'csvtojson'
import camelcaseKeys from 'camelcase-keys'
import { DateTime } from 'luxon'
import {
    Agency,
    Calendar,
    CalendarDate,
    Route,
    ShapeSequence,
    Stop,
    StopTime,
    Transfer,
    Trip,
} from '../src/generated'

const prisma = new PrismaClient()

const fileToDownload = [
    'routes.txt',
    'stops.txt',
    'stop_times.txt',
    'trips.txt',
    'calendar.txt',
    'calendar_dates.txt',
    'transfers.txt',
    'agency.txt',
    'shapes.txt',
]

async function getAndInsertDataFromTrentinoTrasporti(
    endpoint: string,
    routeCategory: RouteCategory
) {
    try {
        const response: any = await axios.get(endpoint, {
            responseType: 'arraybuffer',
        })

        let zip: any = new AdmZip(response.data)

        var zipEntries = zip.getEntries()

        let routes: Route[] = []
        let stops: Stop[] = []
        let stopTimes: StopTime[] = []
        let trips: Trip[] = []
        let calendar: Calendar[] = []
        let calendarDates: CalendarDate[] = []
        let transfers: Transfer[] = []
        let agency: Agency[] = []
        let shapeSequences: ShapeSequence[] = []

        for (const zipEntry of zipEntries) {
            if (fileToDownload.includes(zipEntry.name)) {
                let fileToString: string = zipEntry.getData().toString('utf8')
                const res = await csv({ checkType: false }).fromString(
                    fileToString
                )
                fileToString = ''
                if (zipEntry.name === 'routes.txt')
                    routes = camelcaseKeys(res).map((k) => ({
                        ...k,
                        routeType: parseRouteType(k.routeType),
                        agencyId: parseInt(k.agencyId),
                        routeId: `${routeCategory}_${k.routeId}`,
                        category: routeCategory,
                    }))
                else if (zipEntry.name === 'stops.txt')
                    stops = camelcaseKeys(res).map((k) => ({
                        ...k,
                        zoneId: k.zoneId === '' ? null : parseInt(k.zoneId),
                        wheelchairBoarding: parseWheelChairAccessible(
                            k.wheelchairBoarding
                        ),
                        stopId: `${routeCategory}_${k.stopId}`,
                        category: routeCategory,
                    }))
                else if (zipEntry.name === 'stop_times.txt')
                    stopTimes = camelcaseKeys(res).map((k) => ({
                        ...k,
                        stopId: `${routeCategory}_${k.stopId}`,
                        stopSequence: parseInt(k.stopSequence),
                        tripId: `${routeCategory}_${k.tripId}`,
                    }))
                else if (zipEntry.name === 'trips.txt')
                    trips = camelcaseKeys(res).map((k) => ({
                        ...k,
                        tripId: `${routeCategory}_${k.tripId}`,
                        wheelchairAccessible: parseWheelChairAccessible(
                            k.wheelchairAccessible
                        ),
                        directionId: parseDirection(k.directionId),
                        routeId: `${routeCategory}_${k.routeId}`,
                        category: routeCategory,
                        serviceId: `${routeCategory}_${k.serviceId}`,
                        shapeId: k.shapeId === '' ? undefined : k.shapeId,
                    }))
                else if (zipEntry.name === 'calendar.txt')
                    calendar = camelcaseKeys(res).map((k) =>
                        parseCalendar(k, routeCategory)
                    )
                else if (zipEntry.name === 'calendar_dates.txt')
                    calendarDates = camelcaseKeys(res).map((k) => ({
                        ...k,
                        date: k.date
                            ? DateTime.fromFormat(
                                  k.date + ' 01:00:00',
                                  'yyyyMMdd hh:mm:ss'
                              ).toJSDate()
                            : null,
                        exceptionType: k.exceptionType === '1',
                        serviceId: `${routeCategory}_${k.serviceId}`,
                    }))
                else if (zipEntry.name === 'transfers.txt')
                    transfers = camelcaseKeys(res).map((k) => ({
                        ...k,
                        fromStopId: `${routeCategory}_${k.fromStopId}`,
                        toStopId: `${routeCategory}_${k.toStopId}`,
                        transferType: parseInt(k.transferType),
                        minTransferTime: !k.minTransferTime
                            ? 0
                            : parseInt(k.minTransferTime),
                    }))
                else if (zipEntry.name === 'agency.txt')
                    agency = camelcaseKeys(res).map((k) => ({
                        ...k,
                        agencyId: parseInt(k.agencyId),
                    }))
                else if (zipEntry.name === 'shapes.txt')
                    shapeSequences = camelcaseKeys(res).map((k) => ({
                        ...k,
                        shapePtSequence: parseInt(k.shapePtSequence),
                        shapePtLat: parseFloat(k.shapePtLat),
                        shapePtLon: parseFloat(k.shapePtLon),
                    }))
            }
        }

        if (routeCategory === RouteCategory.URBAN)
            await prisma.agency.createMany({ data: agency })
        await prisma.stop.createMany({ data: stops })
        await prisma.route.createMany({ data: routes })
        await prisma.calendar.createMany({ data: calendar })
        await prisma.calendarDate.createMany({ data: calendarDates })
        await prisma.shape.createMany({
            data: Array.from(
                new Set(
                    trips
                        .filter((t) => t.shapeId !== undefined)
                        .map((k) => k.shapeId!)
                )
            ).map((k) => ({ shapeId: k })),
        })
        await prisma.shapeSequence.createMany({ data: shapeSequences })
        await prisma.trip.createMany({ data: trips })
        await prisma.stopTime.createMany({ data: stopTimes })
        await prisma.transfer.createMany({ data: transfers })
    } catch (error) {
        console.error(error)
        console.error(`Endpoint is not working: ${endpoint}`)
    }
}

async function main() {
    console.log(`Start seeding ...`)
    await getAndInsertDataFromTrentinoTrasporti(
        'http://www.trentinotrasporti.it/opendata/google_transit_urbano_tte.zip',
        RouteCategory.URBAN
    )
    await getAndInsertDataFromTrentinoTrasporti(
        'http://www.trentinotrasporti.it/opendata/google_transit_extraurbano_tte.zip',
        RouteCategory.SUBURBAN
    )
    console.log(`Seeding finished.`)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })

function parseRouteType(routeTypeNumber: string): RouteType {
    switch (routeTypeNumber) {
        case '0':
            return RouteType.TRAM
        case '1':
            return RouteType.SUBWAY
        case '2':
            return RouteType.TRAIN
        case '3':
            return RouteType.BUS
        case '4':
            return RouteType.FERRY
        case '5':
            return RouteType.CABLE_CAR
        case '6':
            return RouteType.GONDOLA
        case '7':
            return RouteType.ROPE_WAY
    }
    return RouteType.BUS
}

function parseWheelChairAccessible(
    wheelchairAccessibleNumber: string
): WheelchairAccessible {
    switch (wheelchairAccessibleNumber) {
        case '0':
            return WheelchairAccessible.NO_INFO
        case '1':
            return WheelchairAccessible.YES
        case '2':
            return WheelchairAccessible.NO
    }
    return WheelchairAccessible.NO_INFO
}

function parseDirection(directionNumber: string): Direction {
    switch (directionNumber) {
        case '0':
            return Direction.WAY
        case '1':
            return Direction.RETURN
    }
    return Direction.WAY
}

function parseCalendar(calendar: any, routeCategory: RouteCategory): Calendar {
    return {
        ...calendar,
        serviceId: `${routeCategory}_${calendar.serviceId}`,
        endDate: calendar.endDate
            ? DateTime.fromFormat(
                  calendar.endDate + ' 01:00:00',
                  'yyyyMMdd hh:mm:ss'
              ).toJSDate()
            : null,
        startDate: calendar.startDate
            ? DateTime.fromFormat(
                  calendar.startDate + ' 01:00:00',
                  'yyyyMMdd hh:mm:ss'
              ).toJSDate()
            : null,
        monday: calendar.monday === '1',
        tuesday: calendar.tuesday === '1',
        wednesday: calendar.wednesday === '1',
        thursday: calendar.thursday === '1',
        friday: calendar.friday === '1',
        saturday: calendar.saturday === '1',
        sunday: calendar.sunday === '1',
    }
}
