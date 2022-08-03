import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateStopArgs } from "./args/AggregateStopArgs";
import { Stop } from "../../../models/Stop";
import { AggregateStop } from "../../outputs/AggregateStop";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Stop)
export class AggregateStopResolver {
  @TypeGraphQL.Query(_returns => AggregateStop, {
    nullable: false
  })
  async aggregateStop(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateStopArgs): Promise<AggregateStop> {
    return getPrismaFromContext(ctx).stop.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
