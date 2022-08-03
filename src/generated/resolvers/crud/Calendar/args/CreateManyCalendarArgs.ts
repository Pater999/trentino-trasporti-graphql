import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CalendarCreateManyInput } from "../../../inputs/CalendarCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCalendarArgs {
  @TypeGraphQL.Field(_type => [CalendarCreateManyInput], {
    nullable: false
  })
  data!: CalendarCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
