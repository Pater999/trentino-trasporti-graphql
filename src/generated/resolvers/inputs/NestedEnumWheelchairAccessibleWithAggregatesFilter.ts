import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumWheelchairAccessibleFilter } from "../inputs/NestedEnumWheelchairAccessibleFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { WheelchairAccessible } from "../../enums/WheelchairAccessible";

@TypeGraphQL.InputType("NestedEnumWheelchairAccessibleWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumWheelchairAccessibleWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumWheelchairAccessibleWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumWheelchairAccessibleWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumWheelchairAccessibleFilter, {
    nullable: true
  })
  _min?: NestedEnumWheelchairAccessibleFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumWheelchairAccessibleFilter, {
    nullable: true
  })
  _max?: NestedEnumWheelchairAccessibleFilter | undefined;
}
