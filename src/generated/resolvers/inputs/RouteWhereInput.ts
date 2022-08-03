import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AgencyRelationFilter } from "../inputs/AgencyRelationFilter";
import { EnumRouteCategoryFilter } from "../inputs/EnumRouteCategoryFilter";
import { EnumRouteTypeFilter } from "../inputs/EnumRouteTypeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TripListRelationFilter } from "../inputs/TripListRelationFilter";

@TypeGraphQL.InputType("RouteWhereInput", {
  isAbstract: true
})
export class RouteWhereInput {
  @TypeGraphQL.Field(_type => [RouteWhereInput], {
    nullable: true
  })
  AND?: RouteWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RouteWhereInput], {
    nullable: true
  })
  OR?: RouteWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RouteWhereInput], {
    nullable: true
  })
  NOT?: RouteWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  routeId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  agencyId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => AgencyRelationFilter, {
    nullable: true
  })
  agency?: AgencyRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  routeShortName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  routeLongName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRouteTypeFilter, {
    nullable: true
  })
  routeType?: EnumRouteTypeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  routeColor?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  routeTextColor?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => TripListRelationFilter, {
    nullable: true
  })
  trips?: TripListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRouteCategoryFilter, {
    nullable: true
  })
  category?: EnumRouteCategoryFilter | undefined;
}
