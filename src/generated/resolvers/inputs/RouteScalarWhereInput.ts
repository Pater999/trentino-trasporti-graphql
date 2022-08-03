import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumRouteCategoryFilter } from "../inputs/EnumRouteCategoryFilter";
import { EnumRouteTypeFilter } from "../inputs/EnumRouteTypeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("RouteScalarWhereInput", {
  isAbstract: true
})
export class RouteScalarWhereInput {
  @TypeGraphQL.Field(_type => [RouteScalarWhereInput], {
    nullable: true
  })
  AND?: RouteScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RouteScalarWhereInput], {
    nullable: true
  })
  OR?: RouteScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RouteScalarWhereInput], {
    nullable: true
  })
  NOT?: RouteScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  routeId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  agencyId?: IntFilter | undefined;

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

  @TypeGraphQL.Field(_type => EnumRouteCategoryFilter, {
    nullable: true
  })
  category?: EnumRouteCategoryFilter | undefined;
}
