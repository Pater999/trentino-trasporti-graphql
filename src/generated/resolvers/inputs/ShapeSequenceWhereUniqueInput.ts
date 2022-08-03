import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShapeSequenceShapeIdShapePtSequenceCompoundUniqueInput } from "../inputs/ShapeSequenceShapeIdShapePtSequenceCompoundUniqueInput";

@TypeGraphQL.InputType("ShapeSequenceWhereUniqueInput", {
  isAbstract: true
})
export class ShapeSequenceWhereUniqueInput {
  @TypeGraphQL.Field(_type => ShapeSequenceShapeIdShapePtSequenceCompoundUniqueInput, {
    nullable: true
  })
  shapeId_shapePtSequence?: ShapeSequenceShapeIdShapePtSequenceCompoundUniqueInput | undefined;
}
