import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Direction } from "../../enums/Direction";
import { RouteCategory } from "../../enums/RouteCategory";
import { WheelchairAccessible } from "../../enums/WheelchairAccessible";

@TypeGraphQL.InputType("TripCreateManyRouteInput", {
  isAbstract: true
})
export class TripCreateManyRouteInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tripId!: string;

  @TypeGraphQL.Field(_type => RouteCategory, {
    nullable: true
  })
  category?: "URBAN" | "SUBURBAN" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  serviceId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tripHeadsign!: string;

  @TypeGraphQL.Field(_type => Direction, {
    nullable: true
  })
  directionId?: "WAY" | "RETURN" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shapeId?: string | undefined;

  @TypeGraphQL.Field(_type => WheelchairAccessible, {
    nullable: true
  })
  wheelchairAccessible?: "NO_INFO" | "YES" | "NO" | undefined;
}
