import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AgencyUpdateInput } from "../../../inputs/AgencyUpdateInput";
import { AgencyWhereUniqueInput } from "../../../inputs/AgencyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneAgencyArgs {
  @TypeGraphQL.Field(_type => AgencyUpdateInput, {
    nullable: false
  })
  data!: AgencyUpdateInput;

  @TypeGraphQL.Field(_type => AgencyWhereUniqueInput, {
    nullable: false
  })
  where!: AgencyWhereUniqueInput;
}
