import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneShapeSequenceArgs } from "./args/UpdateOneShapeSequenceArgs";
import { ShapeSequence } from "../../../models/ShapeSequence";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ShapeSequence)
export class UpdateOneShapeSequenceResolver {
  @TypeGraphQL.Mutation(_returns => ShapeSequence, {
    nullable: true
  })
  async updateOneShapeSequence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneShapeSequenceArgs): Promise<ShapeSequence | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).shapeSequence.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
