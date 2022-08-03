import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateNestedManyWithoutRouteInput } from "../inputs/TripCreateNestedManyWithoutRouteInput";
import { RouteCategory } from "../../enums/RouteCategory";
import { RouteType } from "../../enums/RouteType";

@TypeGraphQL.InputType("RouteCreateWithoutAgencyInput", {
  isAbstract: true
})
export class RouteCreateWithoutAgencyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  routeId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  routeShortName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  routeLongName!: string;

  @TypeGraphQL.Field(_type => RouteType, {
    nullable: false
  })
  routeType!: "TRAM" | "SUBWAY" | "TRAIN" | "BUS" | "FERRY" | "CABLE_CAR" | "GONDOLA" | "ROPE_WAY";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  routeColor?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  routeTextColor?: string | undefined;

  @TypeGraphQL.Field(_type => TripCreateNestedManyWithoutRouteInput, {
    nullable: true
  })
  trips?: TripCreateNestedManyWithoutRouteInput | undefined;

  @TypeGraphQL.Field(_type => RouteCategory, {
    nullable: true
  })
  category?: "URBAN" | "SUBURBAN" | undefined;
}
