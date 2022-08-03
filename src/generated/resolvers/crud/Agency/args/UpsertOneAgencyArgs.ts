import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AgencyCreateInput } from "../../../inputs/AgencyCreateInput";
import { AgencyUpdateInput } from "../../../inputs/AgencyUpdateInput";
import { AgencyWhereUniqueInput } from "../../../inputs/AgencyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAgencyArgs {
  @TypeGraphQL.Field(_type => AgencyWhereUniqueInput, {
    nullable: false
  })
  where!: AgencyWhereUniqueInput;

  @TypeGraphQL.Field(_type => AgencyCreateInput, {
    nullable: false
  })
  create!: AgencyCreateInput;

  @TypeGraphQL.Field(_type => AgencyUpdateInput, {
    nullable: false
  })
  update!: AgencyUpdateInput;
}
