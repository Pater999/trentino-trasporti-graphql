import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StopOrderByWithAggregationInput } from "../../../inputs/StopOrderByWithAggregationInput";
import { StopScalarWhereWithAggregatesInput } from "../../../inputs/StopScalarWhereWithAggregatesInput";
import { StopWhereInput } from "../../../inputs/StopWhereInput";
import { StopScalarFieldEnum } from "../../../../enums/StopScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByStopArgs {
  @TypeGraphQL.Field(_type => StopWhereInput, {
    nullable: true
  })
  where?: StopWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StopOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: StopOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [StopScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"stopId" | "stopCode" | "stopName" | "stopDesc" | "stopLat" | "stopLon" | "zoneId" | "wheelchairBoarding" | "category">;

  @TypeGraphQL.Field(_type => StopScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: StopScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
