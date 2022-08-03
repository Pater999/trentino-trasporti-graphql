import * as TypeGraphQL from "type-graphql";
import { Calendar } from "../../../models/Calendar";
import { Route } from "../../../models/Route";
import { Shape } from "../../../models/Shape";
import { StopTime } from "../../../models/StopTime";
import { Trip } from "../../../models/Trip";
import { TripStopTimesArgs } from "./args/TripStopTimesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Trip)
export class TripRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Route, {
    nullable: false
  })
  async route(@TypeGraphQL.Root() trip: Trip, @TypeGraphQL.Ctx() ctx: any): Promise<Route> {
    return getPrismaFromContext(ctx).trip.findUnique({
      where: {
        tripId: trip.tripId,
      },
    }).route({});
  }

  @TypeGraphQL.FieldResolver(_type => Calendar, {
    nullable: false
  })
  async service(@TypeGraphQL.Root() trip: Trip, @TypeGraphQL.Ctx() ctx: any): Promise<Calendar> {
    return getPrismaFromContext(ctx).trip.findUnique({
      where: {
        tripId: trip.tripId,
      },
    }).service({});
  }

  @TypeGraphQL.FieldResolver(_type => Shape, {
    nullable: true
  })
  async shape(@TypeGraphQL.Root() trip: Trip, @TypeGraphQL.Ctx() ctx: any): Promise<Shape | null> {
    return getPrismaFromContext(ctx).trip.findUnique({
      where: {
        tripId: trip.tripId,
      },
    }).shape({});
  }

  @TypeGraphQL.FieldResolver(_type => [StopTime], {
    nullable: false
  })
  async stopTimes(@TypeGraphQL.Root() trip: Trip, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TripStopTimesArgs): Promise<StopTime[]> {
    return getPrismaFromContext(ctx).trip.findUnique({
      where: {
        tripId: trip.tripId,
      },
    }).stopTimes(args);
  }
}
