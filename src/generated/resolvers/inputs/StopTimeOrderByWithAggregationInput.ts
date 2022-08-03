import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopTimeAvgOrderByAggregateInput } from "../inputs/StopTimeAvgOrderByAggregateInput";
import { StopTimeCountOrderByAggregateInput } from "../inputs/StopTimeCountOrderByAggregateInput";
import { StopTimeMaxOrderByAggregateInput } from "../inputs/StopTimeMaxOrderByAggregateInput";
import { StopTimeMinOrderByAggregateInput } from "../inputs/StopTimeMinOrderByAggregateInput";
import { StopTimeSumOrderByAggregateInput } from "../inputs/StopTimeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StopTimeOrderByWithAggregationInput", {
  isAbstract: true
})
export class StopTimeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tripId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  arrivalTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  departureTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  stopId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  stopSequence?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => StopTimeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: StopTimeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StopTimeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: StopTimeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StopTimeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: StopTimeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StopTimeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: StopTimeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StopTimeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: StopTimeSumOrderByAggregateInput | undefined;
}
