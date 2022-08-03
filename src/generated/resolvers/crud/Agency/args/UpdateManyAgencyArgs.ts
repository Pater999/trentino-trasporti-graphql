import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AgencyUpdateManyMutationInput } from "../../../inputs/AgencyUpdateManyMutationInput";
import { AgencyWhereInput } from "../../../inputs/AgencyWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAgencyArgs {
  @TypeGraphQL.Field(_type => AgencyUpdateManyMutationInput, {
    nullable: false
  })
  data!: AgencyUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AgencyWhereInput, {
    nullable: true
  })
  where?: AgencyWhereInput | undefined;
}
