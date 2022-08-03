import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CalendarCountOrderByAggregateInput } from "../inputs/CalendarCountOrderByAggregateInput";
import { CalendarMaxOrderByAggregateInput } from "../inputs/CalendarMaxOrderByAggregateInput";
import { CalendarMinOrderByAggregateInput } from "../inputs/CalendarMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CalendarOrderByWithAggregationInput", {
  isAbstract: true
})
export class CalendarOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  serviceId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  monday?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tuesday?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  wednesday?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  thursday?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  friday?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  saturday?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sunday?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  startDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  endDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CalendarCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CalendarCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CalendarMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CalendarMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CalendarMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CalendarMinOrderByAggregateInput | undefined;
}
