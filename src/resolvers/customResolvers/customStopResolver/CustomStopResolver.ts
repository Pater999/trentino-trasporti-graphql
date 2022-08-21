import { Args, Ctx, Query, Resolver } from 'type-graphql'
import { MyContext } from '../../../context'
import { Stop } from '../../../generated'
import { FindNearestStopsArgs } from './args/FindNearestStopsArgs'

@Resolver()
export class CustomStopResolver {
    @Query((returns) => [Stop], { nullable: false })
    async findNearestStops(
        @Ctx() { prisma }: MyContext,
        @Args() args: FindNearestStopsArgs
    ): Promise<Stop[]> {
        const query = await prisma.$queryRaw<
            Array<{ stopId: string }>
        >`SELECT "stopId" FROM "Stop" WHERE ST_DWithin(ST_MakePoint("stopLon", "stopLat"), ST_MakePoint(${args.longitude}, ${args.latitude})::geography, ${args.radius} * 1000)`

        return await prisma.stop.findMany({
            where: {
                stopId: {
                    in: query.map(({ stopId }) => stopId)
                }
            }
        })
    }
}
