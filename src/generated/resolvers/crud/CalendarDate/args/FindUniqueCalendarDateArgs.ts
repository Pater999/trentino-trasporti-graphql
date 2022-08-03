import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CalendarDateWhereUniqueInput } from "../../../inputs/CalendarDateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCalendarDateArgs {
  @TypeGraphQL.Field(_type => CalendarDateWhereUniqueInput, {
    nullable: false
  })
  where!: CalendarDateWhereUniqueInput;
}
