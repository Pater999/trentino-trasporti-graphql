import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumRouteTypeFilter } from "../inputs/NestedEnumRouteTypeFilter";
import { RouteType } from "../../enums/RouteType";

@TypeGraphQL.InputType("EnumRouteTypeFilter", {
  isAbstract: true
})
export class EnumRouteTypeFilter {
  @TypeGraphQL.Field(_type => RouteType, {
    nullable: true
  })
  equals?: "TRAM" | "SUBWAY" | "TRAIN" | "BUS" | "FERRY" | "CABLE_CAR" | "GONDOLA" | "ROPE_WAY" | undefined;

  @TypeGraphQL.Field(_type => [RouteType], {
    nullable: true
  })
  in?: Array<"TRAM" | "SUBWAY" | "TRAIN" | "BUS" | "FERRY" | "CABLE_CAR" | "GONDOLA" | "ROPE_WAY"> | undefined;

  @TypeGraphQL.Field(_type => [RouteType], {
    nullable: true
  })
  notIn?: Array<"TRAM" | "SUBWAY" | "TRAIN" | "BUS" | "FERRY" | "CABLE_CAR" | "GONDOLA" | "ROPE_WAY"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRouteTypeFilter, {
    nullable: true
  })
  not?: NestedEnumRouteTypeFilter | undefined;
}
