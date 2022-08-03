import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShapeCountAggregate } from "../outputs/ShapeCountAggregate";
import { ShapeMaxAggregate } from "../outputs/ShapeMaxAggregate";
import { ShapeMinAggregate } from "../outputs/ShapeMinAggregate";

@TypeGraphQL.ObjectType("AggregateShape", {
  isAbstract: true,
  simpleResolvers: true
})
export class AggregateShape {
  @TypeGraphQL.Field(_type => ShapeCountAggregate, {
    nullable: true
  })
  _count!: ShapeCountAggregate | null;

  @TypeGraphQL.Field(_type => ShapeMinAggregate, {
    nullable: true
  })
  _min!: ShapeMinAggregate | null;

  @TypeGraphQL.Field(_type => ShapeMaxAggregate, {
    nullable: true
  })
  _max!: ShapeMaxAggregate | null;
}
