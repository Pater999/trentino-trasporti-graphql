import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CalendarCreateOrConnectWithoutCalendarDatesInput } from "../inputs/CalendarCreateOrConnectWithoutCalendarDatesInput";
import { CalendarCreateWithoutCalendarDatesInput } from "../inputs/CalendarCreateWithoutCalendarDatesInput";
import { CalendarUpdateWithoutCalendarDatesInput } from "../inputs/CalendarUpdateWithoutCalendarDatesInput";
import { CalendarUpsertWithoutCalendarDatesInput } from "../inputs/CalendarUpsertWithoutCalendarDatesInput";
import { CalendarWhereUniqueInput } from "../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.InputType("CalendarUpdateOneRequiredWithoutCalendarDatesNestedInput", {
  isAbstract: true
})
export class CalendarUpdateOneRequiredWithoutCalendarDatesNestedInput {
  @TypeGraphQL.Field(_type => CalendarCreateWithoutCalendarDatesInput, {
    nullable: true
  })
  create?: CalendarCreateWithoutCalendarDatesInput | undefined;

  @TypeGraphQL.Field(_type => CalendarCreateOrConnectWithoutCalendarDatesInput, {
    nullable: true
  })
  connectOrCreate?: CalendarCreateOrConnectWithoutCalendarDatesInput | undefined;

  @TypeGraphQL.Field(_type => CalendarUpsertWithoutCalendarDatesInput, {
    nullable: true
  })
  upsert?: CalendarUpsertWithoutCalendarDatesInput | undefined;

  @TypeGraphQL.Field(_type => CalendarWhereUniqueInput, {
    nullable: true
  })
  connect?: CalendarWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CalendarUpdateWithoutCalendarDatesInput, {
    nullable: true
  })
  update?: CalendarUpdateWithoutCalendarDatesInput | undefined;
}
