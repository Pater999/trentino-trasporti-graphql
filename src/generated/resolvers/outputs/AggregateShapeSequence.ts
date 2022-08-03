import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShapeSequenceAvgAggregate } from "../outputs/ShapeSequenceAvgAggregate";
import { ShapeSequenceCountAggregate } from "../outputs/ShapeSequenceCountAggregate";
import { ShapeSequenceMaxAggregate } from "../outputs/ShapeSequenceMaxAggregate";
import { ShapeSequenceMinAggregate } from "../outputs/ShapeSequenceMinAggregate";
import { ShapeSequenceSumAggregate } from "../outputs/ShapeSequenceSumAggregate";

@TypeGraphQL.ObjectType("AggregateShapeSequence", {
  isAbstract: true,
  simpleResolvers: true
})
export class AggregateShapeSequence {
  @TypeGraphQL.Field(_type => ShapeSequenceCountAggregate, {
    nullable: true
  })
  _count!: ShapeSequenceCountAggregate | null;

  @TypeGraphQL.Field(_type => ShapeSequenceAvgAggregate, {
    nullable: true
  })
  _avg!: ShapeSequenceAvgAggregate | null;

  @TypeGraphQL.Field(_type => ShapeSequenceSumAggregate, {
    nullable: true
  })
  _sum!: ShapeSequenceSumAggregate | null;

  @TypeGraphQL.Field(_type => ShapeSequenceMinAggregate, {
    nullable: true
  })
  _min!: ShapeSequenceMinAggregate | null;

  @TypeGraphQL.Field(_type => ShapeSequenceMaxAggregate, {
    nullable: true
  })
  _max!: ShapeSequenceMaxAggregate | null;
}
