import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CalendarUpdateOneRequiredWithoutTripsNestedInput } from "../inputs/CalendarUpdateOneRequiredWithoutTripsNestedInput";
import { EnumDirectionFieldUpdateOperationsInput } from "../inputs/EnumDirectionFieldUpdateOperationsInput";
import { EnumRouteCategoryFieldUpdateOperationsInput } from "../inputs/EnumRouteCategoryFieldUpdateOperationsInput";
import { EnumWheelchairAccessibleFieldUpdateOperationsInput } from "../inputs/EnumWheelchairAccessibleFieldUpdateOperationsInput";
import { RouteUpdateOneRequiredWithoutTripsNestedInput } from "../inputs/RouteUpdateOneRequiredWithoutTripsNestedInput";
import { StopTimeUpdateManyWithoutTripNestedInput } from "../inputs/StopTimeUpdateManyWithoutTripNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("TripUpdateWithoutShapeInput", {
  isAbstract: true
})
export class TripUpdateWithoutShapeInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  tripId?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => RouteUpdateOneRequiredWithoutTripsNestedInput, {
    nullable: true
  })
  route?: RouteUpdateOneRequiredWithoutTripsNestedInput | undefined;

  @TypeGraphQL.Field(_type => EnumRouteCategoryFieldUpdateOperationsInput, {
    nullable: true
  })
  category?: EnumRouteCategoryFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CalendarUpdateOneRequiredWithoutTripsNestedInput, {
    nullable: true
  })
  service?: CalendarUpdateOneRequiredWithoutTripsNestedInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  tripHeadsign?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumDirectionFieldUpdateOperationsInput, {
    nullable: true
  })
  directionId?: EnumDirectionFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumWheelchairAccessibleFieldUpdateOperationsInput, {
    nullable: true
  })
  wheelchairAccessible?: EnumWheelchairAccessibleFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StopTimeUpdateManyWithoutTripNestedInput, {
    nullable: true
  })
  stopTimes?: StopTimeUpdateManyWithoutTripNestedInput | undefined;
}
