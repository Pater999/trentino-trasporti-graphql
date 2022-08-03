import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CalendarCreateNestedOneWithoutCalendarDatesInput } from "../inputs/CalendarCreateNestedOneWithoutCalendarDatesInput";

@TypeGraphQL.InputType("CalendarDateCreateInput", {
  isAbstract: true
})
export class CalendarDateCreateInput {
  @TypeGraphQL.Field(_type => CalendarCreateNestedOneWithoutCalendarDatesInput, {
    nullable: false
  })
  service!: CalendarCreateNestedOneWithoutCalendarDatesInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  exceptionType!: boolean;
}
