import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneStopTimeArgs } from "./args/UpsertOneStopTimeArgs";
import { StopTime } from "../../../models/StopTime";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StopTime)
export class UpsertOneStopTimeResolver {
  @TypeGraphQL.Mutation(_returns => StopTime, {
    nullable: false
  })
  async upsertOneStopTime(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneStopTimeArgs): Promise<StopTime> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).stopTime.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
