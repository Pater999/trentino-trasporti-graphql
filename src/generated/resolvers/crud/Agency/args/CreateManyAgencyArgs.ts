import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AgencyCreateManyInput } from "../../../inputs/AgencyCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAgencyArgs {
  @TypeGraphQL.Field(_type => [AgencyCreateManyInput], {
    nullable: false
  })
  data!: AgencyCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
