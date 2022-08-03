import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CalendarOrderByWithRelationInput } from "../inputs/CalendarOrderByWithRelationInput";
import { RouteOrderByWithRelationInput } from "../inputs/RouteOrderByWithRelationInput";
import { ShapeOrderByWithRelationInput } from "../inputs/ShapeOrderByWithRelationInput";
import { StopTimeOrderByRelationAggregateInput } from "../inputs/StopTimeOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TripOrderByWithRelationInput", {
  isAbstract: true
})
export class TripOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tripId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  routeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => RouteOrderByWithRelationInput, {
    nullable: true
  })
  route?: RouteOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  serviceId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CalendarOrderByWithRelationInput, {
    nullable: true
  })
  service?: CalendarOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tripHeadsign?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  directionId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shapeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ShapeOrderByWithRelationInput, {
    nullable: true
  })
  shape?: ShapeOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  wheelchairAccessible?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => StopTimeOrderByRelationAggregateInput, {
    nullable: true
  })
  stopTimes?: StopTimeOrderByRelationAggregateInput | undefined;
}
