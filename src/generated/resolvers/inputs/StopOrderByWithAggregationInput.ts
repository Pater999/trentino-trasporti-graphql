import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopAvgOrderByAggregateInput } from "../inputs/StopAvgOrderByAggregateInput";
import { StopCountOrderByAggregateInput } from "../inputs/StopCountOrderByAggregateInput";
import { StopMaxOrderByAggregateInput } from "../inputs/StopMaxOrderByAggregateInput";
import { StopMinOrderByAggregateInput } from "../inputs/StopMinOrderByAggregateInput";
import { StopSumOrderByAggregateInput } from "../inputs/StopSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StopOrderByWithAggregationInput", {
  isAbstract: true
})
export class StopOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  stopId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  stopCode?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  stopName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  stopDesc?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  stopLat?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  stopLon?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  zoneId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  wheelchairBoarding?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => StopCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: StopCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StopAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: StopAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StopMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: StopMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StopMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: StopMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StopSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: StopSumOrderByAggregateInput | undefined;
}
