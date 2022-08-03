import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ShapeSequence } from "../models/ShapeSequence";
import { Trip } from "../models/Trip";
import { ShapeCount } from "../resolvers/outputs/ShapeCount";

@TypeGraphQL.ObjectType("Shape", {
  isAbstract: true,
  simpleResolvers: true
})
export class Shape {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shapeId!: string;

  trips?: Trip[];

  shapeSequences?: ShapeSequence[];

  @TypeGraphQL.Field(_type => ShapeCount, {
    nullable: true
  })
  _count?: ShapeCount | null;
}
