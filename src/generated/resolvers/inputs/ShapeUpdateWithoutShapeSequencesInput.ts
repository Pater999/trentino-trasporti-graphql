import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TripUpdateManyWithoutShapeNestedInput } from "../inputs/TripUpdateManyWithoutShapeNestedInput";

@TypeGraphQL.InputType("ShapeUpdateWithoutShapeSequencesInput", {
  isAbstract: true
})
export class ShapeUpdateWithoutShapeSequencesInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  shapeId?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TripUpdateManyWithoutShapeNestedInput, {
    nullable: true
  })
  trips?: TripUpdateManyWithoutShapeNestedInput | undefined;
}
