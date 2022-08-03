import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CalendarCreateWithoutTripsInput } from "../inputs/CalendarCreateWithoutTripsInput";
import { CalendarWhereUniqueInput } from "../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.InputType("CalendarCreateOrConnectWithoutTripsInput", {
  isAbstract: true
})
export class CalendarCreateOrConnectWithoutTripsInput {
  @TypeGraphQL.Field(_type => CalendarWhereUniqueInput, {
    nullable: false
  })
  where!: CalendarWhereUniqueInput;

  @TypeGraphQL.Field(_type => CalendarCreateWithoutTripsInput, {
    nullable: false
  })
  create!: CalendarCreateWithoutTripsInput;
}
