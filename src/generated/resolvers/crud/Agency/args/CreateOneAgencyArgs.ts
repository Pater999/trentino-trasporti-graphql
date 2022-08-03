import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AgencyCreateInput } from "../../../inputs/AgencyCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAgencyArgs {
  @TypeGraphQL.Field(_type => AgencyCreateInput, {
    nullable: false
  })
  data!: AgencyCreateInput;
}
