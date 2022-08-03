import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumRouteCategoryFilter } from "../inputs/NestedEnumRouteCategoryFilter";
import { NestedEnumRouteCategoryWithAggregatesFilter } from "../inputs/NestedEnumRouteCategoryWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { RouteCategory } from "../../enums/RouteCategory";

@TypeGraphQL.InputType("EnumRouteCategoryWithAggregatesFilter", {
  isAbstract: true
})
export class EnumRouteCategoryWithAggregatesFilter {
  @TypeGraphQL.Field(_type => RouteCategory, {
    nullable: true
  })
  equals?: "URBAN" | "SUBURBAN" | undefined;

  @TypeGraphQL.Field(_type => [RouteCategory], {
    nullable: true
  })
  in?: Array<"URBAN" | "SUBURBAN"> | undefined;

  @TypeGraphQL.Field(_type => [RouteCategory], {
    nullable: true
  })
  notIn?: Array<"URBAN" | "SUBURBAN"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRouteCategoryWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumRouteCategoryWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRouteCategoryFilter, {
    nullable: true
  })
  _min?: NestedEnumRouteCategoryFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRouteCategoryFilter, {
    nullable: true
  })
  _max?: NestedEnumRouteCategoryFilter | undefined;
}
