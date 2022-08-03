import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShapeCreateWithoutShapeSequencesInput } from "../inputs/ShapeCreateWithoutShapeSequencesInput";
import { ShapeUpdateWithoutShapeSequencesInput } from "../inputs/ShapeUpdateWithoutShapeSequencesInput";

@TypeGraphQL.InputType("ShapeUpsertWithoutShapeSequencesInput", {
  isAbstract: true
})
export class ShapeUpsertWithoutShapeSequencesInput {
  @TypeGraphQL.Field(_type => ShapeUpdateWithoutShapeSequencesInput, {
    nullable: false
  })
  update!: ShapeUpdateWithoutShapeSequencesInput;

  @TypeGraphQL.Field(_type => ShapeCreateWithoutShapeSequencesInput, {
    nullable: false
  })
  create!: ShapeCreateWithoutShapeSequencesInput;
}
