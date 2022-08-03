import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { CalendarDateListRelationFilter } from "../inputs/CalendarDateListRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TripListRelationFilter } from "../inputs/TripListRelationFilter";

@TypeGraphQL.InputType("CalendarWhereInput", {
  isAbstract: true
})
export class CalendarWhereInput {
  @TypeGraphQL.Field(_type => [CalendarWhereInput], {
    nullable: true
  })
  AND?: CalendarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CalendarWhereInput], {
    nullable: true
  })
  OR?: CalendarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CalendarWhereInput], {
    nullable: true
  })
  NOT?: CalendarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  serviceId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  monday?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  tuesday?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  wednesday?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  thursday?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  friday?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  saturday?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  sunday?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  startDate?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  endDate?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CalendarDateListRelationFilter, {
    nullable: true
  })
  calendarDates?: CalendarDateListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TripListRelationFilter, {
    nullable: true
  })
  trips?: TripListRelationFilter | undefined;
}
