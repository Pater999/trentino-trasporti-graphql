import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CalendarDateOrderByWithAggregationInput } from "../../../inputs/CalendarDateOrderByWithAggregationInput";
import { CalendarDateScalarWhereWithAggregatesInput } from "../../../inputs/CalendarDateScalarWhereWithAggregatesInput";
import { CalendarDateWhereInput } from "../../../inputs/CalendarDateWhereInput";
import { CalendarDateScalarFieldEnum } from "../../../../enums/CalendarDateScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCalendarDateArgs {
  @TypeGraphQL.Field(_type => CalendarDateWhereInput, {
    nullable: true
  })
  where?: CalendarDateWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CalendarDateOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CalendarDateOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CalendarDateScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"serviceId" | "date" | "exceptionType">;

  @TypeGraphQL.Field(_type => CalendarDateScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CalendarDateScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
