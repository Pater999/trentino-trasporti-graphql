import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CalendarWhereUniqueInput } from "../../../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCalendarArgs {
  @TypeGraphQL.Field(_type => CalendarWhereUniqueInput, {
    nullable: false
  })
  where!: CalendarWhereUniqueInput;
}
