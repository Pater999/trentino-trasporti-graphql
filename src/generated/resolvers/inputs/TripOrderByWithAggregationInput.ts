import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCountOrderByAggregateInput } from "../inputs/TripCountOrderByAggregateInput";
import { TripMaxOrderByAggregateInput } from "../inputs/TripMaxOrderByAggregateInput";
import { TripMinOrderByAggregateInput } from "../inputs/TripMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TripOrderByWithAggregationInput", {
  isAbstract: true
})
export class TripOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tripId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  routeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  serviceId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tripHeadsign?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  directionId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shapeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  wheelchairAccessible?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TripCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TripCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TripMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TripMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TripMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TripMinOrderByAggregateInput | undefined;
}
