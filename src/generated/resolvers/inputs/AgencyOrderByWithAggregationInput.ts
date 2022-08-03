import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AgencyAvgOrderByAggregateInput } from "../inputs/AgencyAvgOrderByAggregateInput";
import { AgencyCountOrderByAggregateInput } from "../inputs/AgencyCountOrderByAggregateInput";
import { AgencyMaxOrderByAggregateInput } from "../inputs/AgencyMaxOrderByAggregateInput";
import { AgencyMinOrderByAggregateInput } from "../inputs/AgencyMinOrderByAggregateInput";
import { AgencySumOrderByAggregateInput } from "../inputs/AgencySumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AgencyOrderByWithAggregationInput", {
  isAbstract: true
})
export class AgencyOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  agencyId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  agencyName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  agencyUrl?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  agencyTimezone?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  agencyPhone?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  agencyLang?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AgencyCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AgencyCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AgencyAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: AgencyAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AgencyMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AgencyMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AgencyMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AgencyMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AgencySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: AgencySumOrderByAggregateInput | undefined;
}
