import * as TypeGraphQL from "type-graphql";

export enum RouteType {
  TRAM = "TRAM",
  SUBWAY = "SUBWAY",
  TRAIN = "TRAIN",
  BUS = "BUS",
  FERRY = "FERRY",
  CABLE_CAR = "CABLE_CAR",
  GONDOLA = "GONDOLA",
  ROPE_WAY = "ROPE_WAY"
}
TypeGraphQL.registerEnumType(RouteType, {
  name: "RouteType",
  description: undefined,
});
