import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CalendarDateCountOrderByAggregateInput } from "../inputs/CalendarDateCountOrderByAggregateInput";
import { CalendarDateMaxOrderByAggregateInput } from "../inputs/CalendarDateMaxOrderByAggregateInput";
import { CalendarDateMinOrderByAggregateInput } from "../inputs/CalendarDateMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CalendarDateOrderByWithAggregationInput", {
  isAbstract: true
})
export class CalendarDateOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  serviceId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  exceptionType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CalendarDateCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CalendarDateCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CalendarDateMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CalendarDateMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CalendarDateMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CalendarDateMinOrderByAggregateInput | undefined;
}
