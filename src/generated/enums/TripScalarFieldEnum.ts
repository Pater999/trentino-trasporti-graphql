import * as TypeGraphQL from "type-graphql";

export enum TripScalarFieldEnum {
  tripId = "tripId",
  routeId = "routeId",
  category = "category",
  serviceId = "serviceId",
  tripHeadsign = "tripHeadsign",
  directionId = "directionId",
  shapeId = "shapeId",
  wheelchairAccessible = "wheelchairAccessible"
}
TypeGraphQL.registerEnumType(TripScalarFieldEnum, {
  name: "TripScalarFieldEnum",
  description: undefined,
});
