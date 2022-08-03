import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CalendarDateCreateInput } from "../../../inputs/CalendarDateCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCalendarDateArgs {
  @TypeGraphQL.Field(_type => CalendarDateCreateInput, {
    nullable: false
  })
  data!: CalendarDateCreateInput;
}
