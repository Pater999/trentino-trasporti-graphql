import * as TypeGraphQL from "type-graphql";

export enum RouteScalarFieldEnum {
  routeId = "routeId",
  agencyId = "agencyId",
  routeShortName = "routeShortName",
  routeLongName = "routeLongName",
  routeType = "routeType",
  routeColor = "routeColor",
  routeTextColor = "routeTextColor",
  category = "category"
}
TypeGraphQL.registerEnumType(RouteScalarFieldEnum, {
  name: "RouteScalarFieldEnum",
  description: undefined,
});
