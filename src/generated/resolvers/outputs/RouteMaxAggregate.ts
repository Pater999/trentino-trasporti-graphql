import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RouteCategory } from "../../enums/RouteCategory";
import { RouteType } from "../../enums/RouteType";

@TypeGraphQL.ObjectType("RouteMaxAggregate", {
  isAbstract: true,
  simpleResolvers: true
})
export class RouteMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  routeId!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  agencyId!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  routeShortName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  routeLongName!: string | null;

  @TypeGraphQL.Field(_type => RouteType, {
    nullable: true
  })
  routeType!: "TRAM" | "SUBWAY" | "TRAIN" | "BUS" | "FERRY" | "CABLE_CAR" | "GONDOLA" | "ROPE_WAY" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  routeColor!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  routeTextColor!: string | null;

  @TypeGraphQL.Field(_type => RouteCategory, {
    nullable: true
  })
  category!: "URBAN" | "SUBURBAN" | null;
}
