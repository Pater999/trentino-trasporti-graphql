import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Calendar } from "../models/Calendar";
import { Route } from "../models/Route";
import { Shape } from "../models/Shape";
import { StopTime } from "../models/StopTime";
import { Direction } from "../enums/Direction";
import { RouteCategory } from "../enums/RouteCategory";
import { WheelchairAccessible } from "../enums/WheelchairAccessible";
import { TripCount } from "../resolvers/outputs/TripCount";

@TypeGraphQL.ObjectType("Trip", {
  isAbstract: true,
  simpleResolvers: true
})
export class Trip {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tripId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  routeId!: string;

  route?: Route;

  @TypeGraphQL.Field(_type => RouteCategory, {
    nullable: false
  })
  category!: "URBAN" | "SUBURBAN";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  serviceId!: string;

  service?: Calendar;

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
  shapeId?: string | null;

  shape?: Shape | null;

  @TypeGraphQL.Field(_type => WheelchairAccessible, {
    nullable: false
  })
  wheelchairAccessible!: "NO_INFO" | "YES" | "NO";

  stopTimes?: StopTime[];

  @TypeGraphQL.Field(_type => TripCount, {
    nullable: true
  })
  _count?: TripCount | null;
}
