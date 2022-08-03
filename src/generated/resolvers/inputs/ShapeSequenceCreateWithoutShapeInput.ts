import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ShapeSequenceCreateWithoutShapeInput", {
  isAbstract: true
})
export class ShapeSequenceCreateWithoutShapeInput {
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
