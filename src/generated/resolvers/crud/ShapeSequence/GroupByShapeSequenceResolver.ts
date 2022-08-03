import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByShapeSequenceArgs } from "./args/GroupByShapeSequenceArgs";
import { ShapeSequence } from "../../../models/ShapeSequence";
import { ShapeSequenceGroupBy } from "../../outputs/ShapeSequenceGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ShapeSequence)
export class GroupByShapeSequenceResolver {
  @TypeGraphQL.Query(_returns => [ShapeSequenceGroupBy], {
    nullable: false
  })
  async groupByShapeSequence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByShapeSequenceArgs): Promise<ShapeSequenceGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).shapeSequence.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
