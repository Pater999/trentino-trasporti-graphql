import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopAvgAggregate } from "../outputs/StopAvgAggregate";
import { StopCountAggregate } from "../outputs/StopCountAggregate";
import { StopMaxAggregate } from "../outputs/StopMaxAggregate";
import { StopMinAggregate } from "../outputs/StopMinAggregate";
import { StopSumAggregate } from "../outputs/StopSumAggregate";

@TypeGraphQL.ObjectType("AggregateStop", {
  isAbstract: true,
  simpleResolvers: true
})
export class AggregateStop {
  @TypeGraphQL.Field(_type => StopCountAggregate, {
    nullable: true
  })
  _count!: StopCountAggregate | null;

  @TypeGraphQL.Field(_type => StopAvgAggregate, {
    nullable: true
  })
  _avg!: StopAvgAggregate | null;

  @TypeGraphQL.Field(_type => StopSumAggregate, {
    nullable: true
  })
  _sum!: StopSumAggregate | null;

  @TypeGraphQL.Field(_type => StopMinAggregate, {
    nullable: true
  })
  _min!: StopMinAggregate | null;

  @TypeGraphQL.Field(_type => StopMaxAggregate, {
    nullable: true
  })
  _max!: StopMaxAggregate | null;
}
