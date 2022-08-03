import * as TypeGraphQL from "type-graphql";

export enum WheelchairAccessible {
  NO_INFO = "NO_INFO",
  YES = "YES",
  NO = "NO"
}
TypeGraphQL.registerEnumType(WheelchairAccessible, {
  name: "WheelchairAccessible",
  description: undefined,
});
