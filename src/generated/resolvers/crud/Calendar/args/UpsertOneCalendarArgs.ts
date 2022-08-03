import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CalendarCreateInput } from "../../../inputs/CalendarCreateInput";
import { CalendarUpdateInput } from "../../../inputs/CalendarUpdateInput";
import { CalendarWhereUniqueInput } from "../../../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCalendarArgs {
  @TypeGraphQL.Field(_type => CalendarWhereUniqueInput, {
    nullable: false
  })
  where!: CalendarWhereUniqueInput;

  @TypeGraphQL.Field(_type => CalendarCreateInput, {
    nullable: false
  })
  create!: CalendarCreateInput;

  @TypeGraphQL.Field(_type => CalendarUpdateInput, {
    nullable: false
  })
  update!: CalendarUpdateInput;
}
