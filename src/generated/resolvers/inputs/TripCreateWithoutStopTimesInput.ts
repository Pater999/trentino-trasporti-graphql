import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CalendarCreateNestedOneWithoutTripsInput } from "../inputs/CalendarCreateNestedOneWithoutTripsInput";
import { RouteCreateNestedOneWithoutTripsInput } from "../inputs/RouteCreateNestedOneWithoutTripsInput";
import { ShapeCreateNestedOneWithoutTripsInput } from "../inputs/ShapeCreateNestedOneWithoutTripsInput";
import { Direction } from "../../enums/Direction";
import { RouteCategory } from "../../enums/RouteCategory";
import { WheelchairAccessible } from "../../enums/WheelchairAccessible";

@TypeGraphQL.InputType("TripCreateWithoutStopTimesInput", {
  isAbstract: true
})
export class TripCreateWithoutStopTimesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tripId!: string;

  @TypeGraphQL.Field(_type => RouteCreateNestedOneWithoutTripsInput, {
    nullable: false
  })
  route!: RouteCreateNestedOneWithoutTripsInput;

  @TypeGraphQL.Field(_type => RouteCategory, {
    nullable: true
  })
  category?: "URBAN" | "SUBURBAN" | undefined;

  @TypeGraphQL.Field(_type => CalendarCreateNestedOneWithoutTripsInput, {
    nullable: false
  })
  service!: CalendarCreateNestedOneWithoutTripsInput;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tripHeadsign!: string;

  @TypeGraphQL.Field(_type => Direction, {
    nullable: true
  })
  directionId?: "WAY" | "RETURN" | undefined;

  @TypeGraphQL.Field(_type => ShapeCreateNestedOneWithoutTripsInput, {
    nullable: true
  })
  shape?: ShapeCreateNestedOneWithoutTripsInput | undefined;

  @TypeGraphQL.Field(_type => WheelchairAccessible, {
    nullable: true
  })
  wheelchairAccessible?: "NO_INFO" | "YES" | "NO" | undefined;
}
