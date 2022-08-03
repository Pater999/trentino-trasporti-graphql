import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CalendarDateUpdateInput } from "../../../inputs/CalendarDateUpdateInput";
import { CalendarDateWhereUniqueInput } from "../../../inputs/CalendarDateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCalendarDateArgs {
  @TypeGraphQL.Field(_type => CalendarDateUpdateInput, {
    nullable: false
  })
  data!: CalendarDateUpdateInput;

  @TypeGraphQL.Field(_type => CalendarDateWhereUniqueInput, {
    nullable: false
  })
  where!: CalendarDateWhereUniqueInput;
}
