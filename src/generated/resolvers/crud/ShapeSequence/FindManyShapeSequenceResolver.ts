import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyShapeSequenceArgs } from "./args/FindManyShapeSequenceArgs";
import { ShapeSequence } from "../../../models/ShapeSequence";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ShapeSequence)
export class FindManyShapeSequenceResolver {
  @TypeGraphQL.Query(_returns => [ShapeSequence], {
    nullable: false
  })
  async shapeSequences(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyShapeSequenceArgs): Promise<ShapeSequence[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).shapeSequence.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
