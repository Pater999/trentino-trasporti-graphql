import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { EnumRouteCategoryFilter } from "../inputs/EnumRouteCategoryFilter";
import { EnumWheelchairAccessibleFilter } from "../inputs/EnumWheelchairAccessibleFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StopTimeListRelationFilter } from "../inputs/StopTimeListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TransferListRelationFilter } from "../inputs/TransferListRelationFilter";

@TypeGraphQL.InputType("StopWhereInput", {
  isAbstract: true
})
export class StopWhereInput {
  @TypeGraphQL.Field(_type => [StopWhereInput], {
    nullable: true
  })
  AND?: StopWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StopWhereInput], {
    nullable: true
  })
  OR?: StopWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StopWhereInput], {
    nullable: true
  })
  NOT?: StopWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  stopId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  stopCode?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  stopName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  stopDesc?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  stopLat?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  stopLon?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  zoneId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumWheelchairAccessibleFilter, {
    nullable: true
  })
  wheelchairBoarding?: EnumWheelchairAccessibleFilter | undefined;

  @TypeGraphQL.Field(_type => TransferListRelationFilter, {
    nullable: true
  })
  transfersFrom?: TransferListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TransferListRelationFilter, {
    nullable: true
  })
  transfersTo?: TransferListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StopTimeListRelationFilter, {
    nullable: true
  })
  stopTimes?: StopTimeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRouteCategoryFilter, {
    nullable: true
  })
  category?: EnumRouteCategoryFilter | undefined;
}
