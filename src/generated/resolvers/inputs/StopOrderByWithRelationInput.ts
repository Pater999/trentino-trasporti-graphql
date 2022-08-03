import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopTimeOrderByRelationAggregateInput } from "../inputs/StopTimeOrderByRelationAggregateInput";
import { TransferOrderByRelationAggregateInput } from "../inputs/TransferOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StopOrderByWithRelationInput", {
  isAbstract: true
})
export class StopOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => TransferOrderByRelationAggregateInput, {
    nullable: true
  })
  transfersFrom?: TransferOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TransferOrderByRelationAggregateInput, {
    nullable: true
  })
  transfersTo?: TransferOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StopTimeOrderByRelationAggregateInput, {
    nullable: true
  })
  stopTimes?: StopTimeOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category?: "asc" | "desc" | undefined;
}
