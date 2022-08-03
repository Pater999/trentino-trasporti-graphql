import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StopUpdateOneRequiredWithoutStopTimesNestedInput } from "../inputs/StopUpdateOneRequiredWithoutStopTimesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("StopTimeUpdateWithoutTripInput", {
  isAbstract: true
})
export class StopTimeUpdateWithoutTripInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  arrivalTime?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  departureTime?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StopUpdateOneRequiredWithoutStopTimesNestedInput, {
    nullable: true
  })
  stop?: StopUpdateOneRequiredWithoutStopTimesNestedInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  stopSequence?: IntFieldUpdateOperationsInput | undefined;
}
