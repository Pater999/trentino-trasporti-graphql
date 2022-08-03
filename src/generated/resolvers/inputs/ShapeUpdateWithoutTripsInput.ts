import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShapeSequenceUpdateManyWithoutShapeNestedInput } from "../inputs/ShapeSequenceUpdateManyWithoutShapeNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ShapeUpdateWithoutTripsInput", {
  isAbstract: true
})
export class ShapeUpdateWithoutTripsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  shapeId?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ShapeSequenceUpdateManyWithoutShapeNestedInput, {
    nullable: true
  })
  shapeSequences?: ShapeSequenceUpdateManyWithoutShapeNestedInput | undefined;
}
