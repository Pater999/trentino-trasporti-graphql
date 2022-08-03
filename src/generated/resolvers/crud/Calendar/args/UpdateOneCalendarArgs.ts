import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CalendarUpdateInput } from "../../../inputs/CalendarUpdateInput";
import { CalendarWhereUniqueInput } from "../../../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCalendarArgs {
  @TypeGraphQL.Field(_type => CalendarUpdateInput, {
    nullable: false
  })
  data!: CalendarUpdateInput;

  @TypeGraphQL.Field(_type => CalendarWhereUniqueInput, {
    nullable: false
  })
  where!: CalendarWhereUniqueInput;
}
