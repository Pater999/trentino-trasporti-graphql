import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("StopSumAggregate", {
  isAbstract: true,
  simpleResolvers: true
})
export class StopSumAggregate {
  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  stopLat!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  stopLon!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  zoneId!: number | null;
}
