import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstStopTimeArgs } from "./args/FindFirstStopTimeArgs";
import { StopTime } from "../../../models/StopTime";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => StopTime)
export class FindFirstStopTimeResolver {
  @TypeGraphQL.Query(_returns => StopTime, {
    nullable: true
  })
  async findFirstStopTime(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstStopTimeArgs): Promise<StopTime | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).stopTime.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
