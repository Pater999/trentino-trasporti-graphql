import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTransferArgs } from "./args/AggregateTransferArgs";
import { Transfer } from "../../../models/Transfer";
import { AggregateTransfer } from "../../outputs/AggregateTransfer";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Transfer)
export class AggregateTransferResolver {
  @TypeGraphQL.Query(_returns => AggregateTransfer, {
    nullable: false
  })
  async aggregateTransfer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTransferArgs): Promise<AggregateTransfer> {
    return getPrismaFromContext(ctx).transfer.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
