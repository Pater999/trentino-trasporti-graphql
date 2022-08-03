import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CalendarDateCreateManyInput } from "../../../inputs/CalendarDateCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCalendarDateArgs {
  @TypeGraphQL.Field(_type => [CalendarDateCreateManyInput], {
    nullable: false
  })
  data!: CalendarDateCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
