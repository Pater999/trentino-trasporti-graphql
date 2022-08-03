import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumRouteTypeFilter } from "../inputs/NestedEnumRouteTypeFilter";
import { NestedEnumRouteTypeWithAggregatesFilter } from "../inputs/NestedEnumRouteTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { RouteType } from "../../enums/RouteType";

@TypeGraphQL.InputType("EnumRouteTypeWithAggregatesFilter", {
  isAbstract: true
})
export class EnumRouteTypeWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumRouteTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumRouteTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRouteTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumRouteTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRouteTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumRouteTypeFilter | undefined;
}
