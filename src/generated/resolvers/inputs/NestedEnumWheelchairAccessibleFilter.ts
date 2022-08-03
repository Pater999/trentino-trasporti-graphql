import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WheelchairAccessible } from "../../enums/WheelchairAccessible";

@TypeGraphQL.InputType("NestedEnumWheelchairAccessibleFilter", {
  isAbstract: true
})
export class NestedEnumWheelchairAccessibleFilter {
  @TypeGraphQL.Field(_type => WheelchairAccessible, {
    nullable: true
  })
  equals?: "NO_INFO" | "YES" | "NO" | undefined;

  @TypeGraphQL.Field(_type => [WheelchairAccessible], {
    nullable: true
  })
  in?: Array<"NO_INFO" | "YES" | "NO"> | undefined;

  @TypeGraphQL.Field(_type => [WheelchairAccessible], {
    nullable: true
  })
  notIn?: Array<"NO_INFO" | "YES" | "NO"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumWheelchairAccessibleFilter, {
    nullable: true
  })
  not?: NestedEnumWheelchairAccessibleFilter | undefined;
}
