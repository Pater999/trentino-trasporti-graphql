import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AgencyAvgAggregate } from "../outputs/AgencyAvgAggregate";
import { AgencyCountAggregate } from "../outputs/AgencyCountAggregate";
import { AgencyMaxAggregate } from "../outputs/AgencyMaxAggregate";
import { AgencyMinAggregate } from "../outputs/AgencyMinAggregate";
import { AgencySumAggregate } from "../outputs/AgencySumAggregate";

@TypeGraphQL.ObjectType("AgencyGroupBy", {
  isAbstract: true,
  simpleResolvers: true
})
export class AgencyGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  agencyId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  agencyName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  agencyUrl!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  agencyTimezone!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  agencyPhone!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  agencyLang!: string;

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
