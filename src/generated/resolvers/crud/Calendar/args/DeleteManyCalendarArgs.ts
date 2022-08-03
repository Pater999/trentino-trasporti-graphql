import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CalendarWhereInput } from "../../../inputs/CalendarWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCalendarArgs {
  @TypeGraphQL.Field(_type => CalendarWhereInput, {
    nullable: true
  })
  where?: CalendarWhereInput | undefined;
}
