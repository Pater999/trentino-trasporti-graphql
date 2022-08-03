import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransferAvgAggregate } from "../outputs/TransferAvgAggregate";
import { TransferCountAggregate } from "../outputs/TransferCountAggregate";
import { TransferMaxAggregate } from "../outputs/TransferMaxAggregate";
import { TransferMinAggregate } from "../outputs/TransferMinAggregate";
import { TransferSumAggregate } from "../outputs/TransferSumAggregate";

@TypeGraphQL.ObjectType("TransferGroupBy", {
  isAbstract: true,
  simpleResolvers: true
})
export class TransferGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  fromStopId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  toStopId!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  transferType!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  minTransferTime!: number;

  @TypeGraphQL.Field(_type => TransferCountAggregate, {
    nullable: true
  })
  _count!: TransferCountAggregate | null;

  @TypeGraphQL.Field(_type => TransferAvgAggregate, {
    nullable: true
  })
  _avg!: TransferAvgAggregate | null;

  @TypeGraphQL.Field(_type => TransferSumAggregate, {
    nullable: true
  })
  _sum!: TransferSumAggregate | null;

  @TypeGraphQL.Field(_type => TransferMinAggregate, {
    nullable: true
  })
  _min!: TransferMinAggregate | null;

  @TypeGraphQL.Field(_type => TransferMaxAggregate, {
    nullable: true
  })
  _max!: TransferMaxAggregate | null;
}
