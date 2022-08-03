import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumDirectionWithAggregatesFilter } from "../inputs/EnumDirectionWithAggregatesFilter";
import { EnumRouteCategoryWithAggregatesFilter } from "../inputs/EnumRouteCategoryWithAggregatesFilter";
import { EnumWheelchairAccessibleWithAggregatesFilter } from "../inputs/EnumWheelchairAccessibleWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TripScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TripScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TripScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TripScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TripScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TripScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  tripId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  routeId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRouteCategoryWithAggregatesFilter, {
    nullable: true
  })
  category?: EnumRouteCategoryWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  serviceId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  tripHeadsign?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumDirectionWithAggregatesFilter, {
    nullable: true
  })
  directionId?: EnumDirectionWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  shapeId?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumWheelchairAccessibleWithAggregatesFilter, {
    nullable: true
  })
  wheelchairAccessible?: EnumWheelchairAccessibleWithAggregatesFilter | undefined;
}
