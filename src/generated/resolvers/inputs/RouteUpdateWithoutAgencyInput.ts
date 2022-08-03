import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumRouteCategoryFieldUpdateOperationsInput } from "../inputs/EnumRouteCategoryFieldUpdateOperationsInput";
import { EnumRouteTypeFieldUpdateOperationsInput } from "../inputs/EnumRouteTypeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TripUpdateManyWithoutRouteNestedInput } from "../inputs/TripUpdateManyWithoutRouteNestedInput";

@TypeGraphQL.InputType("RouteUpdateWithoutAgencyInput", {
  isAbstract: true
})
export class RouteUpdateWithoutAgencyInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  routeId?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  routeShortName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  routeLongName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumRouteTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  routeType?: EnumRouteTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  routeColor?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  routeTextColor?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TripUpdateManyWithoutRouteNestedInput, {
    nullable: true
  })
  trips?: TripUpdateManyWithoutRouteNestedInput | undefined;

  @TypeGraphQL.Field(_type => EnumRouteCategoryFieldUpdateOperationsInput, {
    nullable: true
  })
  category?: EnumRouteCategoryFieldUpdateOperationsInput | undefined;
}
