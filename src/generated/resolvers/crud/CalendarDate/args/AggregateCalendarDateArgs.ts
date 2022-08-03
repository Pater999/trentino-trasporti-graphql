import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CalendarDateOrderByWithRelationInput } from "../../../inputs/CalendarDateOrderByWithRelationInput";
import { CalendarDateWhereInput } from "../../../inputs/CalendarDateWhereInput";
import { CalendarDateWhereUniqueInput } from "../../../inputs/CalendarDateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCalendarDateArgs {
  @TypeGraphQL.Field(_type => CalendarDateWhereInput, {
    nullable: true
  })
  where?: CalendarDateWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CalendarDateOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CalendarDateOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CalendarDateWhereUniqueInput, {
    nullable: true
  })
  cursor?: CalendarDateWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
