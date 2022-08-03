import * as TypeGraphQL from "type-graphql";

export enum RouteCategory {
  URBAN = "URBAN",
  SUBURBAN = "SUBURBAN"
}
TypeGraphQL.registerEnumType(RouteCategory, {
  name: "RouteCategory",
  description: undefined,
});
