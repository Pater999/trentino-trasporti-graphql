import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateRouteArgs } from "./args/AggregateRouteArgs";
import { Route } from "../../../models/Route";
import { AggregateRoute } from "../../outputs/AggregateRoute";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Route)
export class AggregateRouteResolver {
  @TypeGraphQL.Query(_returns => AggregateRoute, {
    nullable: false
  })
  async aggregateRoute(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRouteArgs): Promise<AggregateRoute> {
    return getPrismaFromContext(ctx).route.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
