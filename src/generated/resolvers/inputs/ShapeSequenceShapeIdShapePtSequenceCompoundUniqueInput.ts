import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ShapeSequenceShapeIdShapePtSequenceCompoundUniqueInput", {
  isAbstract: true
})
export class ShapeSequenceShapeIdShapePtSequenceCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shapeId!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  shapePtSequence!: number;
}
