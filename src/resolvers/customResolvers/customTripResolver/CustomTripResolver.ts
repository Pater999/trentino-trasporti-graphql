import { Args, Ctx, Query, Resolver } from 'type-graphql'
import { MyContext } from '../../../context'
import { Trip } from '../../../generated'
import { RouteDateTripsArgs } from './args/RouteDateTripsArgs'

@Resolver()
export class CustomTripResolver {
    @Query((returns) => [Trip], { nullable: true })
    async routeDateTrips(
        @Ctx() { prisma }: MyContext,
        @Args() args: RouteDateTripsArgs
    ): Promise<Trip[]> {
        const weekday = [
            'sunday',
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday'
        ]
        const day = weekday[args.currentDate.getDay()]

        const where: any = {
            routeId: args.routeId,
            service: {
                is: {}
            }
        }

        where.service.is[day] = true

        return await prisma.trip.findMany({
            skip: args.skip,
            take: args.take,
            where,
            orderBy: [{ tripId: 'asc' }]
        })
    }
}
