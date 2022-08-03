import * as TypeGraphQL from "type-graphql";

export enum ShapeSequenceScalarFieldEnum {
  shapeId = "shapeId",
  shapePtLat = "shapePtLat",
  shapePtLon = "shapePtLon",
  shapePtSequence = "shapePtSequence"
}
TypeGraphQL.registerEnumType(ShapeSequenceScalarFieldEnum, {
  name: "ShapeSequenceScalarFieldEnum",
  description: undefined,
});
