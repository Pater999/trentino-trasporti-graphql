import * as TypeGraphQL from "type-graphql";

export enum StopTimeScalarFieldEnum {
  tripId = "tripId",
  arrivalTime = "arrivalTime",
  departureTime = "departureTime",
  stopId = "stopId",
  stopSequence = "stopSequence"
}
TypeGraphQL.registerEnumType(StopTimeScalarFieldEnum, {
  name: "StopTimeScalarFieldEnum",
  description: undefined,
});
