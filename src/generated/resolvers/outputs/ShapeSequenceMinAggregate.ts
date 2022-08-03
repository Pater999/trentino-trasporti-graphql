import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ShapeSequenceMinAggregate", {
  isAbstract: true,
  simpleResolvers: true
})
export class ShapeSequenceMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shapeId!: string | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  shapePtLat!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  shapePtLon!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  shapePtSequence!: number | null;
}
