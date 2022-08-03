import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CalendarRelationFilter } from "../inputs/CalendarRelationFilter";
import { EnumDirectionFilter } from "../inputs/EnumDirectionFilter";
import { EnumRouteCategoryFilter } from "../inputs/EnumRouteCategoryFilter";
import { EnumWheelchairAccessibleFilter } from "../inputs/EnumWheelchairAccessibleFilter";
import { RouteRelationFilter } from "../inputs/RouteRelationFilter";
import { ShapeRelationFilter } from "../inputs/ShapeRelationFilter";
import { StopTimeListRelationFilter } from "../inputs/StopTimeListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("TripWhereInput", {
  isAbstract: true
})
export class TripWhereInput {
  @TypeGraphQL.Field(_type => [TripWhereInput], {
    nullable: true
  })
  AND?: TripWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripWhereInput], {
    nullable: true
  })
  OR?: TripWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripWhereInput], {
    nullable: true
  })
  NOT?: TripWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  tripId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  routeId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => RouteRelationFilter, {
    nullable: true
  })
  route?: RouteRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRouteCategoryFilter, {
    nullable: true
  })
  category?: EnumRouteCategoryFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  serviceId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => CalendarRelationFilter, {
    nullable: true
  })
  service?: CalendarRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  tripHeadsign?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumDirectionFilter, {
    nullable: true
  })
  directionId?: EnumDirectionFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  shapeId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ShapeRelationFilter, {
    nullable: true
  })
  shape?: ShapeRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EnumWheelchairAccessibleFilter, {
    nullable: true
  })
  wheelchairAccessible?: EnumWheelchairAccessibleFilter | undefined;

  @TypeGraphQL.Field(_type => StopTimeListRelationFilter, {
    nullable: true
  })
  stopTimes?: StopTimeListRelationFilter | undefined;
}
