import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CalendarCreateInput } from "../../../inputs/CalendarCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCalendarArgs {
  @TypeGraphQL.Field(_type => CalendarCreateInput, {
    nullable: false
  })
  data!: CalendarCreateInput;
}
