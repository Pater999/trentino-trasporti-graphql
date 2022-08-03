import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateStopTimeArgs } from "./args/AggregateStopTimeArgs";
import { StopTime } from "../../../models/StopTime";
import { AggregateStopTime } from "../../outputs/AggregateStopTime";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StopTime)
export class AggregateStopTimeResolver {
  @TypeGraphQL.Query(_returns => AggregateStopTime, {
    nullable: false
  })
  async aggregateStopTime(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateStopTimeArgs): Promise<AggregateStopTime> {
    return getPrismaFromContext(ctx).stopTime.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
