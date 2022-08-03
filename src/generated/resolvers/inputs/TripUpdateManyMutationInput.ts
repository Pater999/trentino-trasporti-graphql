import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumDirectionFieldUpdateOperationsInput } from "../inputs/EnumDirectionFieldUpdateOperationsInput";
import { EnumRouteCategoryFieldUpdateOperationsInput } from "../inputs/EnumRouteCategoryFieldUpdateOperationsInput";
import { EnumWheelchairAccessibleFieldUpdateOperationsInput } from "../inputs/EnumWheelchairAccessibleFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("TripUpdateManyMutationInput", {
  isAbstract: true
})
export class TripUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  tripId?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumRouteCategoryFieldUpdateOperationsInput, {
    nullable: true
  })
  category?: EnumRouteCategoryFieldUpdateOperationsInput | undefined;

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
}
