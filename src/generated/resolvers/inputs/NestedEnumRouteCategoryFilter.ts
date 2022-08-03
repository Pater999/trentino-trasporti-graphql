import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RouteCategory } from "../../enums/RouteCategory";

@TypeGraphQL.InputType("NestedEnumRouteCategoryFilter", {
  isAbstract: true
})
export class NestedEnumRouteCategoryFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumRouteCategoryFilter, {
    nullable: true
  })
  not?: NestedEnumRouteCategoryFilter | undefined;
}
