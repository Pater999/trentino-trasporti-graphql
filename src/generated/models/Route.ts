import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Agency } from "../models/Agency";
import { Trip } from "../models/Trip";
import { RouteCategory } from "../enums/RouteCategory";
import { RouteType } from "../enums/RouteType";
import { RouteCount } from "../resolvers/outputs/RouteCount";

@TypeGraphQL.ObjectType("Route", {
  isAbstract: true,
  simpleResolvers: true
})
export class Route {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  routeId!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  agencyId!: number;

  agency?: Agency;

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
  routeColor?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  routeTextColor?: string | null;

  trips?: Trip[];

  @TypeGraphQL.Field(_type => RouteCategory, {
    nullable: false
  })
  category!: "URBAN" | "SUBURBAN";

  @TypeGraphQL.Field(_type => RouteCount, {
    nullable: true
  })
  _count?: RouteCount | null;
}
