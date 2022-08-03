import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTripArgs } from "./args/AggregateTripArgs";
import { Trip } from "../../../models/Trip";
import { AggregateTrip } from "../../outputs/AggregateTrip";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Trip)
export class AggregateTripResolver {
  @TypeGraphQL.Query(_returns => AggregateTrip, {
    nullable: false
  })
  async aggregateTrip(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTripArgs): Promise<AggregateTrip> {
    return getPrismaFromContext(ctx).trip.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
