import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StopTimeOrderByWithAggregationInput } from "../../../inputs/StopTimeOrderByWithAggregationInput";
import { StopTimeScalarWhereWithAggregatesInput } from "../../../inputs/StopTimeScalarWhereWithAggregatesInput";
import { StopTimeWhereInput } from "../../../inputs/StopTimeWhereInput";
import { StopTimeScalarFieldEnum } from "../../../../enums/StopTimeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByStopTimeArgs {
  @TypeGraphQL.Field(_type => StopTimeWhereInput, {
    nullable: true
  })
  where?: StopTimeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StopTimeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: StopTimeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [StopTimeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"tripId" | "arrivalTime" | "departureTime" | "stopId" | "stopSequence">;

  @TypeGraphQL.Field(_type => StopTimeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: StopTimeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
