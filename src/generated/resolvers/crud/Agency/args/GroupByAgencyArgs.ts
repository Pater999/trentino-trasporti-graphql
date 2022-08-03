import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AgencyOrderByWithAggregationInput } from "../../../inputs/AgencyOrderByWithAggregationInput";
import { AgencyScalarWhereWithAggregatesInput } from "../../../inputs/AgencyScalarWhereWithAggregatesInput";
import { AgencyWhereInput } from "../../../inputs/AgencyWhereInput";
import { AgencyScalarFieldEnum } from "../../../../enums/AgencyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAgencyArgs {
  @TypeGraphQL.Field(_type => AgencyWhereInput, {
    nullable: true
  })
  where?: AgencyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AgencyOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AgencyOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AgencyScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"agencyId" | "agencyName" | "agencyUrl" | "agencyTimezone" | "agencyPhone" | "agencyLang">;

  @TypeGraphQL.Field(_type => AgencyScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AgencyScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
