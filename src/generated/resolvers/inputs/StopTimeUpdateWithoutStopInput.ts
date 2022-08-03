import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TripUpdateOneRequiredWithoutStopTimesNestedInput } from "../inputs/TripUpdateOneRequiredWithoutStopTimesNestedInput";

@TypeGraphQL.InputType("StopTimeUpdateWithoutStopInput", {
  isAbstract: true
})
export class StopTimeUpdateWithoutStopInput {
  @TypeGraphQL.Field(_type => TripUpdateOneRequiredWithoutStopTimesNestedInput, {
    nullable: true
  })
  trip?: TripUpdateOneRequiredWithoutStopTimesNestedInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  arrivalTime?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  departureTime?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  stopSequence?: IntFieldUpdateOperationsInput | undefined;
}
