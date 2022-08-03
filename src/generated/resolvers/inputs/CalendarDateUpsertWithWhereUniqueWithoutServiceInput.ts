import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CalendarDateCreateWithoutServiceInput } from "../inputs/CalendarDateCreateWithoutServiceInput";
import { CalendarDateUpdateWithoutServiceInput } from "../inputs/CalendarDateUpdateWithoutServiceInput";
import { CalendarDateWhereUniqueInput } from "../inputs/CalendarDateWhereUniqueInput";

@TypeGraphQL.InputType("CalendarDateUpsertWithWhereUniqueWithoutServiceInput", {
  isAbstract: true
})
export class CalendarDateUpsertWithWhereUniqueWithoutServiceInput {
  @TypeGraphQL.Field(_type => CalendarDateWhereUniqueInput, {
    nullable: false
  })
  where!: CalendarDateWhereUniqueInput;

  @TypeGraphQL.Field(_type => CalendarDateUpdateWithoutServiceInput, {
    nullable: false
  })
  update!: CalendarDateUpdateWithoutServiceInput;

  @TypeGraphQL.Field(_type => CalendarDateCreateWithoutServiceInput, {
    nullable: false
  })
  create!: CalendarDateCreateWithoutServiceInput;
}
