import * as TypeGraphQL from "type-graphql";
import { Agency } from "../../../models/Agency";
import { Route } from "../../../models/Route";
import { Trip } from "../../../models/Trip";
import { RouteTripsArgs } from "./args/RouteTripsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Route)
export class RouteRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Agency, {
    nullable: false
  })
  async agency(@TypeGraphQL.Root() route: Route, @TypeGraphQL.Ctx() ctx: any): Promise<Agency> {
    return getPrismaFromContext(ctx).route.findUnique({
      where: {
        routeId: route.routeId,
      },
    }).agency({});
  }

  @TypeGraphQL.FieldResolver(_type => [Trip], {
    nullable: false
  })
  async trips(@TypeGraphQL.Root() route: Route, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RouteTripsArgs): Promise<Trip[]> {
    return getPrismaFromContext(ctx).route.findUnique({
      where: {
        routeId: route.routeId,
      },
    }).trips(args);
  }
}
