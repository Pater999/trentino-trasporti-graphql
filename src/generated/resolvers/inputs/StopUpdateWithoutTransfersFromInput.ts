import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { EnumRouteCategoryFieldUpdateOperationsInput } from "../inputs/EnumRouteCategoryFieldUpdateOperationsInput";
import { EnumWheelchairAccessibleFieldUpdateOperationsInput } from "../inputs/EnumWheelchairAccessibleFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { StopTimeUpdateManyWithoutStopNestedInput } from "../inputs/StopTimeUpdateManyWithoutStopNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TransferUpdateManyWithoutToStopNestedInput } from "../inputs/TransferUpdateManyWithoutToStopNestedInput";

@TypeGraphQL.InputType("StopUpdateWithoutTransfersFromInput", {
  isAbstract: true
})
export class StopUpdateWithoutTransfersFromInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  stopId?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  stopCode?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  stopName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  stopDesc?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  stopLat?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  stopLon?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  zoneId?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumWheelchairAccessibleFieldUpdateOperationsInput, {
    nullable: true
  })
  wheelchairBoarding?: EnumWheelchairAccessibleFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TransferUpdateManyWithoutToStopNestedInput, {
    nullable: true
  })
  transfersTo?: TransferUpdateManyWithoutToStopNestedInput | undefined;

  @TypeGraphQL.Field(_type => StopTimeUpdateManyWithoutStopNestedInput, {
    nullable: true
  })
  stopTimes?: StopTimeUpdateManyWithoutStopNestedInput | undefined;

  @TypeGraphQL.Field(_type => EnumRouteCategoryFieldUpdateOperationsInput, {
    nullable: true
  })
  category?: EnumRouteCategoryFieldUpdateOperationsInput | undefined;
}
