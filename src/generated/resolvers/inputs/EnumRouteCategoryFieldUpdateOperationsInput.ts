import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RouteCategory } from "../../enums/RouteCategory";

@TypeGraphQL.InputType("EnumRouteCategoryFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumRouteCategoryFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => RouteCategory, {
    nullable: true
  })
  set?: "URBAN" | "SUBURBAN" | undefined;
}
