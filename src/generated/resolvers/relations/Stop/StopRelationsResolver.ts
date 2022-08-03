import * as TypeGraphQL from "type-graphql";
import { Stop } from "../../../models/Stop";
import { StopTime } from "../../../models/StopTime";
import { Transfer } from "../../../models/Transfer";
import { StopStopTimesArgs } from "./args/StopStopTimesArgs";
import { StopTransfersFromArgs } from "./args/StopTransfersFromArgs";
import { StopTransfersToArgs } from "./args/StopTransfersToArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Stop)
export class StopRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Transfer], {
    nullable: false
  })
  async transfersFrom(@TypeGraphQL.Root() stop: Stop, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: StopTransfersFromArgs): Promise<Transfer[]> {
    return getPrismaFromContext(ctx).stop.findUnique({
      where: {
        stopId: stop.stopId,
      },
    }).transfersFrom(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Transfer], {
    nullable: false
  })
  async transfersTo(@TypeGraphQL.Root() stop: Stop, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: StopTransfersToArgs): Promise<Transfer[]> {
    return getPrismaFromContext(ctx).stop.findUnique({
      where: {
        stopId: stop.stopId,
      },
    }).transfersTo(args);
  }

  @TypeGraphQL.FieldResolver(_type => [StopTime], {
    nullable: false
  })
  async stopTimes(@TypeGraphQL.Root() stop: Stop, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: StopStopTimesArgs): Promise<StopTime[]> {
    return getPrismaFromContext(ctx).stop.findUnique({
      where: {
        stopId: stop.stopId,
      },
    }).stopTimes(args);
  }
}
