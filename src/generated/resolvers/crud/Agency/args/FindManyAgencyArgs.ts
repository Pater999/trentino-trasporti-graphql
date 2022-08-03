import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AgencyOrderByWithRelationInput } from "../../../inputs/AgencyOrderByWithRelationInput";
import { AgencyWhereInput } from "../../../inputs/AgencyWhereInput";
import { AgencyWhereUniqueInput } from "../../../inputs/AgencyWhereUniqueInput";
import { AgencyScalarFieldEnum } from "../../../../enums/AgencyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyAgencyArgs {
  @TypeGraphQL.Field(_type => AgencyWhereInput, {
    nullable: true
  })
  where?: AgencyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AgencyOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AgencyOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AgencyWhereUniqueInput, {
    nullable: true
  })
  cursor?: AgencyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AgencyScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"agencyId" | "agencyName" | "agencyUrl" | "agencyTimezone" | "agencyPhone" | "agencyLang"> | undefined;
}
