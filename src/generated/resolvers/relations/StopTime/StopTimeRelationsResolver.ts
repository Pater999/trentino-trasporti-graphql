import * as TypeGraphQL from "type-graphql";
import { Stop } from "../../../models/Stop";
import { StopTime } from "../../../models/StopTime";
import { Trip } from "../../../models/Trip";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StopTime)
export class StopTimeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Trip, {
    nullable: false
  })
  async trip(@TypeGraphQL.Root() stopTime: StopTime, @TypeGraphQL.Ctx() ctx: any): Promise<Trip> {
    return getPrismaFromContext(ctx).stopTime.findUnique({
      where: {
        tripId_stopSequence: {
          tripId: stopTime.tripId,
          stopSequence: stopTime.stopSequence,
        },
      },
    }).trip({});
  }

  @TypeGraphQL.FieldResolver(_type => Stop, {
    nullable: false
  })
  async stop(@TypeGraphQL.Root() stopTime: StopTime, @TypeGraphQL.Ctx() ctx: any): Promise<Stop> {
    return getPrismaFromContext(ctx).stopTime.findUnique({
      where: {
        tripId_stopSequence: {
          tripId: stopTime.tripId,
          stopSequence: stopTime.stopSequence,
        },
      },
    }).stop({});
  }
}
