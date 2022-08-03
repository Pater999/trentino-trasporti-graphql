import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { EnumRouteCategoryFieldUpdateOperationsInput } from "../inputs/EnumRouteCategoryFieldUpdateOperationsInput";
import { EnumWheelchairAccessibleFieldUpdateOperationsInput } from "../inputs/EnumWheelchairAccessibleFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TransferUpdateManyWithoutFromStopNestedInput } from "../inputs/TransferUpdateManyWithoutFromStopNestedInput";
import { TransferUpdateManyWithoutToStopNestedInput } from "../inputs/TransferUpdateManyWithoutToStopNestedInput";

@TypeGraphQL.InputType("StopUpdateWithoutStopTimesInput", {
  isAbstract: true
})
export class StopUpdateWithoutStopTimesInput {
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

  @TypeGraphQL.Field(_type => TransferUpdateManyWithoutFromStopNestedInput, {
    nullable: true
  })
  transfersFrom?: TransferUpdateManyWithoutFromStopNestedInput | undefined;

  @TypeGraphQL.Field(_type => TransferUpdateManyWithoutToStopNestedInput, {
    nullable: true
  })
  transfersTo?: TransferUpdateManyWithoutToStopNestedInput | undefined;

  @TypeGraphQL.Field(_type => EnumRouteCategoryFieldUpdateOperationsInput, {
    nullable: true
  })
  category?: EnumRouteCategoryFieldUpdateOperationsInput | undefined;
}
