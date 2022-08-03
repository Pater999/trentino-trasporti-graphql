import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WheelchairAccessible } from "../../enums/WheelchairAccessible";

@TypeGraphQL.InputType("EnumWheelchairAccessibleFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumWheelchairAccessibleFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => WheelchairAccessible, {
    nullable: true
  })
  set?: "NO_INFO" | "YES" | "NO" | undefined;
}
