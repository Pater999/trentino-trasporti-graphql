import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CalendarCreateWithoutCalendarDatesInput } from "../inputs/CalendarCreateWithoutCalendarDatesInput";
import { CalendarWhereUniqueInput } from "../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.InputType("CalendarCreateOrConnectWithoutCalendarDatesInput", {
  isAbstract: true
})
export class CalendarCreateOrConnectWithoutCalendarDatesInput {
  @TypeGraphQL.Field(_type => CalendarWhereUniqueInput, {
    nullable: false
  })
  where!: CalendarWhereUniqueInput;

  @TypeGraphQL.Field(_type => CalendarCreateWithoutCalendarDatesInput, {
    nullable: false
  })
  create!: CalendarCreateWithoutCalendarDatesInput;
}
