import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CalendarDateCreateInput } from "../../../inputs/CalendarDateCreateInput";
import { CalendarDateUpdateInput } from "../../../inputs/CalendarDateUpdateInput";
import { CalendarDateWhereUniqueInput } from "../../../inputs/CalendarDateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCalendarDateArgs {
  @TypeGraphQL.Field(_type => CalendarDateWhereUniqueInput, {
    nullable: false
  })
  where!: CalendarDateWhereUniqueInput;

  @TypeGraphQL.Field(_type => CalendarDateCreateInput, {
    nullable: false
  })
  create!: CalendarDateCreateInput;

  @TypeGraphQL.Field(_type => CalendarDateUpdateInput, {
    nullable: false
  })
  update!: CalendarDateUpdateInput;
}
