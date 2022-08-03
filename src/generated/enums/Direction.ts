import * as TypeGraphQL from "type-graphql";

export enum Direction {
  WAY = "WAY",
  RETURN = "RETURN"
}
TypeGraphQL.registerEnumType(Direction, {
  name: "Direction",
  description: undefined,
});
