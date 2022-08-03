import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RouteType } from "../../enums/RouteType";

@TypeGraphQL.InputType("EnumRouteTypeFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumRouteTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => RouteType, {
    nullable: true
  })
  set?: "TRAM" | "SUBWAY" | "TRAIN" | "BUS" | "FERRY" | "CABLE_CAR" | "GONDOLA" | "ROPE_WAY" | undefined;
}
