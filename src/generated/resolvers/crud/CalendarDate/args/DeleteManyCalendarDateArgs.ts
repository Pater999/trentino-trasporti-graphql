import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CalendarDateWhereInput } from "../../../inputs/CalendarDateWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCalendarDateArgs {
  @TypeGraphQL.Field(_type => CalendarDateWhereInput, {
    nullable: true
  })
  where?: CalendarDateWhereInput | undefined;
}
