import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CalendarCreateWithoutTripsInput } from "../inputs/CalendarCreateWithoutTripsInput";
import { CalendarUpdateWithoutTripsInput } from "../inputs/CalendarUpdateWithoutTripsInput";

@TypeGraphQL.InputType("CalendarUpsertWithoutTripsInput", {
  isAbstract: true
})
export class CalendarUpsertWithoutTripsInput {
  @TypeGraphQL.Field(_type => CalendarUpdateWithoutTripsInput, {
    nullable: false
  })
  update!: CalendarUpdateWithoutTripsInput;

  @TypeGraphQL.Field(_type => CalendarCreateWithoutTripsInput, {
    nullable: false
  })
  create!: CalendarCreateWithoutTripsInput;
}
