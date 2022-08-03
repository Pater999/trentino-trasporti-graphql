import * as TypeGraphQL from "type-graphql";

export enum StopScalarFieldEnum {
  stopId = "stopId",
  stopCode = "stopCode",
  stopName = "stopName",
  stopDesc = "stopDesc",
  stopLat = "stopLat",
  stopLon = "stopLon",
  zoneId = "zoneId",
  wheelchairBoarding = "wheelchairBoarding",
  category = "category"
}
TypeGraphQL.registerEnumType(StopScalarFieldEnum, {
  name: "StopScalarFieldEnum",
  description: undefined,
});
