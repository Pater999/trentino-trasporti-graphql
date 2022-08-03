import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ShapeMaxAggregate", {
  isAbstract: true,
  simpleResolvers: true
})
export class ShapeMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shapeId!: string | null;
}
