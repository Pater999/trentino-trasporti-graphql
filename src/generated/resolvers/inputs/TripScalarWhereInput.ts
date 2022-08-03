import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumDirectionFilter } from "../inputs/EnumDirectionFilter";
import { EnumRouteCategoryFilter } from "../inputs/EnumRouteCategoryFilter";
import { EnumWheelchairAccessibleFilter } from "../inputs/EnumWheelchairAccessibleFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("TripScalarWhereInput", {
  isAbstract: true
})
export class TripScalarWhereInput {
  @TypeGraphQL.Field(_type => [TripScalarWhereInput], {
    nullable: true
  })
  AND?: TripScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripScalarWhereInput], {
    nullable: true
  })
  OR?: TripScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripScalarWhereInput], {
    nullable: true
  })
  NOT?: TripScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  tripId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  routeId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRouteCategoryFilter, {
    nullable: true
  })
  category?: EnumRouteCategoryFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  serviceId?: StringFilter | undefined;

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

  @TypeGraphQL.Field(_type => EnumWheelchairAccessibleFilter, {
    nullable: true
  })
  wheelchairAccessible?: EnumWheelchairAccessibleFilter | undefined;
}
