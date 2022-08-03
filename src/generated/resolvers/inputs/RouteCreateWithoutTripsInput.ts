import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AgencyCreateNestedOneWithoutRoutesInput } from "../inputs/AgencyCreateNestedOneWithoutRoutesInput";
import { RouteCategory } from "../../enums/RouteCategory";
import { RouteType } from "../../enums/RouteType";

@TypeGraphQL.InputType("RouteCreateWithoutTripsInput", {
  isAbstract: true
})
export class RouteCreateWithoutTripsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  routeId!: string;

  @TypeGraphQL.Field(_type => AgencyCreateNestedOneWithoutRoutesInput, {
    nullable: false
  })
  agency!: AgencyCreateNestedOneWithoutRoutesInput;

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

  @TypeGraphQL.Field(_type => RouteCategory, {
    nullable: true
  })
  category?: "URBAN" | "SUBURBAN" | undefined;
}
