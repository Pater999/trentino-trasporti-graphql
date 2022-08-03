import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CalendarDateUpdateManyMutationInput } from "../../../inputs/CalendarDateUpdateManyMutationInput";
import { CalendarDateWhereInput } from "../../../inputs/CalendarDateWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCalendarDateArgs {
  @TypeGraphQL.Field(_type => CalendarDateUpdateManyMutationInput, {
    nullable: false
  })
  data!: CalendarDateUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CalendarDateWhereInput, {
    nullable: true
  })
  where?: CalendarDateWhereInput | undefined;
}
