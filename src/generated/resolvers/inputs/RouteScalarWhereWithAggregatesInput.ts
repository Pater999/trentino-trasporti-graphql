import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumRouteCategoryWithAggregatesFilter } from "../inputs/EnumRouteCategoryWithAggregatesFilter";
import { EnumRouteTypeWithAggregatesFilter } from "../inputs/EnumRouteTypeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("RouteScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class RouteScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [RouteScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: RouteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RouteScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: RouteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RouteScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: RouteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  routeId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  agencyId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  routeShortName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  routeLongName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRouteTypeWithAggregatesFilter, {
    nullable: true
  })
  routeType?: EnumRouteTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  routeColor?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  routeTextColor?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRouteCategoryWithAggregatesFilter, {
    nullable: true
  })
  category?: EnumRouteCategoryWithAggregatesFilter | undefined;
}
