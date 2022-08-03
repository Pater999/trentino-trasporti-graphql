import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCountAggregate } from "../outputs/TripCountAggregate";
import { TripMaxAggregate } from "../outputs/TripMaxAggregate";
import { TripMinAggregate } from "../outputs/TripMinAggregate";
import { Direction } from "../../enums/Direction";
import { RouteCategory } from "../../enums/RouteCategory";
import { WheelchairAccessible } from "../../enums/WheelchairAccessible";

@TypeGraphQL.ObjectType("TripGroupBy", {
  isAbstract: true,
  simpleResolvers: true
})
export class TripGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tripId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  routeId!: string;

  @TypeGraphQL.Field(_type => RouteCategory, {
    nullable: false
  })
  category!: "URBAN" | "SUBURBAN";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  serviceId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tripHeadsign!: string;

  @TypeGraphQL.Field(_type => Direction, {
    nullable: false
  })
  directionId!: "WAY" | "RETURN";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shapeId!: string | null;

  @TypeGraphQL.Field(_type => WheelchairAccessible, {
    nullable: false
  })
  wheelchairAccessible!: "NO_INFO" | "YES" | "NO";

  @TypeGraphQL.Field(_type => TripCountAggregate, {
    nullable: true
  })
  _count!: TripCountAggregate | null;

  @TypeGraphQL.Field(_type => TripMinAggregate, {
    nullable: true
  })
  _min!: TripMinAggregate | null;

  @TypeGraphQL.Field(_type => TripMaxAggregate, {
    nullable: true
  })
  _max!: TripMaxAggregate | null;
}
