import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AgencyWhereInput } from "../../../inputs/AgencyWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAgencyArgs {
  @TypeGraphQL.Field(_type => AgencyWhereInput, {
    nullable: true
  })
  where?: AgencyWhereInput | undefined;
}
