import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Direction } from "../../enums/Direction";
import { RouteCategory } from "../../enums/RouteCategory";
import { WheelchairAccessible } from "../../enums/WheelchairAccessible";

@TypeGraphQL.ObjectType("TripMinAggregate", {
  isAbstract: true,
  simpleResolvers: true
})
export class TripMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tripId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  routeId!: string | null;

  @TypeGraphQL.Field(_type => RouteCategory, {
    nullable: true
  })
  category!: "URBAN" | "SUBURBAN" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  serviceId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tripHeadsign!: string | null;

  @TypeGraphQL.Field(_type => Direction, {
    nullable: true
  })
  directionId!: "WAY" | "RETURN" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shapeId!: string | null;

  @TypeGraphQL.Field(_type => WheelchairAccessible, {
    nullable: true
  })
  wheelchairAccessible!: "NO_INFO" | "YES" | "NO" | null;
}
