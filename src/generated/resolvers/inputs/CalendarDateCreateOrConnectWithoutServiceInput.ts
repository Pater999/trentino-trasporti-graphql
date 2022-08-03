import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CalendarDateCreateWithoutServiceInput } from "../inputs/CalendarDateCreateWithoutServiceInput";
import { CalendarDateWhereUniqueInput } from "../inputs/CalendarDateWhereUniqueInput";

@TypeGraphQL.InputType("CalendarDateCreateOrConnectWithoutServiceInput", {
  isAbstract: true
})
export class CalendarDateCreateOrConnectWithoutServiceInput {
  @TypeGraphQL.Field(_type => CalendarDateWhereUniqueInput, {
    nullable: false
  })
  where!: CalendarDateWhereUniqueInput;

  @TypeGraphQL.Field(_type => CalendarDateCreateWithoutServiceInput, {
    nullable: false
  })
  create!: CalendarDateCreateWithoutServiceInput;
}
