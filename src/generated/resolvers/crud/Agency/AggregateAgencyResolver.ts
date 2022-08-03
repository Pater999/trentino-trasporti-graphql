import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAgencyArgs } from "./args/AggregateAgencyArgs";
import { Agency } from "../../../models/Agency";
import { AggregateAgency } from "../../outputs/AggregateAgency";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Agency)
export class AggregateAgencyResolver {
  @TypeGraphQL.Query(_returns => AggregateAgency, {
    nullable: false
  })
  async aggregateAgency(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAgencyArgs): Promise<AggregateAgency> {
    return getPrismaFromContext(ctx).agency.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
