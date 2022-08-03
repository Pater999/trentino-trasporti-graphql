import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripOrderByWithRelationInput } from "../../../inputs/TripOrderByWithRelationInput";
import { TripWhereInput } from "../../../inputs/TripWhereInput";
import { TripWhereUniqueInput } from "../../../inputs/TripWhereUniqueInput";
import { TripScalarFieldEnum } from "../../../../enums/TripScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class RouteTripsArgs {
  @TypeGraphQL.Field(_type => TripWhereInput, {
    nullable: true
  })
  where?: TripWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TripOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TripOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: true
  })
  cursor?: TripWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TripScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"tripId" | "routeId" | "category" | "serviceId" | "tripHeadsign" | "directionId" | "shapeId" | "wheelchairAccessible"> | undefined;
}
