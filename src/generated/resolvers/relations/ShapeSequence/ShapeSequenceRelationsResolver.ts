import * as TypeGraphQL from "type-graphql";
import { Shape } from "../../../models/Shape";
import { ShapeSequence } from "../../../models/ShapeSequence";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ShapeSequence)
export class ShapeSequenceRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Shape, {
    nullable: false
  })
  async shape(@TypeGraphQL.Root() shapeSequence: ShapeSequence, @TypeGraphQL.Ctx() ctx: any): Promise<Shape> {
    return getPrismaFromContext(ctx).shapeSequence.findUnique({
      where: {
        shapeId_shapePtSequence: {
          shapeId: shapeSequence.shapeId,
          shapePtSequence: shapeSequence.shapePtSequence,
        },
      },
    }).shape({});
  }
}
