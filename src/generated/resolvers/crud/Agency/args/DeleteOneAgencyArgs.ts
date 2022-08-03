import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AgencyWhereUniqueInput } from "../../../inputs/AgencyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneAgencyArgs {
  @TypeGraphQL.Field(_type => AgencyWhereUniqueInput, {
    nullable: false
  })
  where!: AgencyWhereUniqueInput;
}
