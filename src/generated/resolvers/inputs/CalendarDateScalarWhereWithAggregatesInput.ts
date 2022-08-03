import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CalendarDateScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CalendarDateScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CalendarDateScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CalendarDateScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CalendarDateScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CalendarDateScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CalendarDateScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CalendarDateScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  serviceId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  date?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  exceptionType?: BoolWithAggregatesFilter | undefined;
}
