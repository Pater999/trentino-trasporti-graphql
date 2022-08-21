import { StopTimeTableArgs } from './args/StopTimeTableArgs'
import { Args, Ctx, Query, Resolver } from 'type-graphql'
import { MyContext } from '../../../context'
import { StopTime } from '../../../generated'

@Resolver()
export class CustomStopTimeResolver {
    @Query((returns) => [StopTime], { nullable: true })
    async stopDateTimeTables(
        @Ctx() { prisma }: MyContext,
        @Args() args: StopTimeTableArgs
    ): Promise<StopTime[]> {
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
            skip: args.skip,
            take: args.take,
            stopId: args.stopId,
            trip: {
                is: {
                    service: {
                        is: {}
                    }
                }
            }
        }

        where.trip.is.service.is[day] = true

        return await prisma.stopTime.findMany({
            where,
            orderBy: { stopSequence: 'asc' }
        })
    }
}
