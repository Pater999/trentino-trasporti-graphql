import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("AgencyScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class AgencyScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AgencyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AgencyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AgencyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AgencyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AgencyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AgencyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  agencyId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  agencyName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  agencyUrl?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  agencyTimezone?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  agencyPhone?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  agencyLang?: StringWithAggregatesFilter | undefined;
}
