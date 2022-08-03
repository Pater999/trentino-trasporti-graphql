import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalWithAggregatesFilter } from "../inputs/DecimalWithAggregatesFilter";
import { EnumRouteCategoryWithAggregatesFilter } from "../inputs/EnumRouteCategoryWithAggregatesFilter";
import { EnumWheelchairAccessibleWithAggregatesFilter } from "../inputs/EnumWheelchairAccessibleWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("StopScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class StopScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [StopScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: StopScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StopScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: StopScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StopScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: StopScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  stopId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  stopCode?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  stopName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  stopDesc?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalWithAggregatesFilter, {
    nullable: true
  })
  stopLat?: DecimalWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalWithAggregatesFilter, {
    nullable: true
  })
  stopLon?: DecimalWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  zoneId?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumWheelchairAccessibleWithAggregatesFilter, {
    nullable: true
  })
  wheelchairBoarding?: EnumWheelchairAccessibleWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRouteCategoryWithAggregatesFilter, {
    nullable: true
  })
  category?: EnumRouteCategoryWithAggregatesFilter | undefined;
}
