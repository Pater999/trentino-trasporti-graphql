import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripOrderByWithAggregationInput } from "../../../inputs/TripOrderByWithAggregationInput";
import { TripScalarWhereWithAggregatesInput } from "../../../inputs/TripScalarWhereWithAggregatesInput";
import { TripWhereInput } from "../../../inputs/TripWhereInput";
import { TripScalarFieldEnum } from "../../../../enums/TripScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTripArgs {
  @TypeGraphQL.Field(_type => TripWhereInput, {
    nullable: true
  })
  where?: TripWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TripOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TripOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"tripId" | "routeId" | "category" | "serviceId" | "tripHeadsign" | "directionId" | "shapeId" | "wheelchairAccessible">;

  @TypeGraphQL.Field(_type => TripScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TripScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
