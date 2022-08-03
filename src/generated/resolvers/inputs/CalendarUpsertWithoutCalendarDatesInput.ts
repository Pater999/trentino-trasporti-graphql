import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CalendarCreateWithoutCalendarDatesInput } from "../inputs/CalendarCreateWithoutCalendarDatesInput";
import { CalendarUpdateWithoutCalendarDatesInput } from "../inputs/CalendarUpdateWithoutCalendarDatesInput";

@TypeGraphQL.InputType("CalendarUpsertWithoutCalendarDatesInput", {
  isAbstract: true
})
export class CalendarUpsertWithoutCalendarDatesInput {
  @TypeGraphQL.Field(_type => CalendarUpdateWithoutCalendarDatesInput, {
    nullable: false
  })
  update!: CalendarUpdateWithoutCalendarDatesInput;

  @TypeGraphQL.Field(_type => CalendarCreateWithoutCalendarDatesInput, {
    nullable: false
  })
  create!: CalendarCreateWithoutCalendarDatesInput;
}
