import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Shape } from "../models/Shape";

@TypeGraphQL.ObjectType("ShapeSequence", {
  isAbstract: true,
  simpleResolvers: true
})
export class ShapeSequence {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shapeId!: string;

  shape?: Shape;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  shapePtLat!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  shapePtLon!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  shapePtSequence!: number;
}
