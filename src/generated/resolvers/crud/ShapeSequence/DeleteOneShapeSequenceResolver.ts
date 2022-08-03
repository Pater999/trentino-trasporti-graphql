import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneShapeSequenceArgs } from "./args/DeleteOneShapeSequenceArgs";
import { ShapeSequence } from "../../../models/ShapeSequence";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ShapeSequence)
export class DeleteOneShapeSequenceResolver {
  @TypeGraphQL.Mutation(_returns => ShapeSequence, {
    nullable: true
  })
  async deleteOneShapeSequence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneShapeSequenceArgs): Promise<ShapeSequence | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).shapeSequence.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
