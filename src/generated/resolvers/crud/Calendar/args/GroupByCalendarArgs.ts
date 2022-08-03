import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CalendarOrderByWithAggregationInput } from "../../../inputs/CalendarOrderByWithAggregationInput";
import { CalendarScalarWhereWithAggregatesInput } from "../../../inputs/CalendarScalarWhereWithAggregatesInput";
import { CalendarWhereInput } from "../../../inputs/CalendarWhereInput";
import { CalendarScalarFieldEnum } from "../../../../enums/CalendarScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCalendarArgs {
  @TypeGraphQL.Field(_type => CalendarWhereInput, {
    nullable: true
  })
  where?: CalendarWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CalendarOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CalendarOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CalendarScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"serviceId" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday" | "startDate" | "endDate">;

  @TypeGraphQL.Field(_type => CalendarScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CalendarScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
