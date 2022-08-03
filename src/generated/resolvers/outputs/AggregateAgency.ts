import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AgencyAvgAggregate } from "../outputs/AgencyAvgAggregate";
import { AgencyCountAggregate } from "../outputs/AgencyCountAggregate";
import { AgencyMaxAggregate } from "../outputs/AgencyMaxAggregate";
import { AgencyMinAggregate } from "../outputs/AgencyMinAggregate";
import { AgencySumAggregate } from "../outputs/AgencySumAggregate";

@TypeGraphQL.ObjectType("AggregateAgency", {
  isAbstract: true,
  simpleResolvers: true
})
export class AggregateAgency {
  @TypeGraphQL.Field(_type => AgencyCountAggregate, {
    nullable: true
  })
  _count!: AgencyCountAggregate | null;

  @TypeGraphQL.Field(_type => AgencyAvgAggregate, {
    nullable: true
  })
  _avg!: AgencyAvgAggregate | null;

  @TypeGraphQL.Field(_type => AgencySumAggregate, {
    nullable: true
  })
  _sum!: AgencySumAggregate | null;

  @TypeGraphQL.Field(_type => AgencyMinAggregate, {
    nullable: true
  })
  _min!: AgencyMinAggregate | null;

  @TypeGraphQL.Field(_type => AgencyMaxAggregate, {
    nullable: true
  })
  _max!: AgencyMaxAggregate | null;
}
