import * as TypeGraphQL from "type-graphql";
import { Stop } from "../../../models/Stop";
import { Transfer } from "../../../models/Transfer";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Transfer)
export class TransferRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Stop, {
    nullable: false
  })
  async fromStop(@TypeGraphQL.Root() transfer: Transfer, @TypeGraphQL.Ctx() ctx: any): Promise<Stop> {
    return getPrismaFromContext(ctx).transfer.findUnique({
      where: {
        fromStopId_toStopId: {
          fromStopId: transfer.fromStopId,
          toStopId: transfer.toStopId,
        },
      },
    }).fromStop({});
  }

  @TypeGraphQL.FieldResolver(_type => Stop, {
    nullable: false
  })
  async toStop(@TypeGraphQL.Root() transfer: Transfer, @TypeGraphQL.Ctx() ctx: any): Promise<Stop> {
    return getPrismaFromContext(ctx).transfer.findUnique({
      where: {
        fromStopId_toStopId: {
          fromStopId: transfer.fromStopId,
          toStopId: transfer.toStopId,
        },
      },
    }).toStop({});
  }
}
