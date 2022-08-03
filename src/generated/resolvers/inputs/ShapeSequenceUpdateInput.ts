import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ShapeUpdateOneRequiredWithoutShapeSequencesNestedInput } from "../inputs/ShapeUpdateOneRequiredWithoutShapeSequencesNestedInput";

@TypeGraphQL.InputType("ShapeSequenceUpdateInput", {
  isAbstract: true
})
export class ShapeSequenceUpdateInput {
  @TypeGraphQL.Field(_type => ShapeUpdateOneRequiredWithoutShapeSequencesNestedInput, {
    nullable: true
  })
  shape?: ShapeUpdateOneRequiredWithoutShapeSequencesNestedInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  shapePtLat?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  shapePtLon?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  shapePtSequence?: IntFieldUpdateOperationsInput | undefined;
}
