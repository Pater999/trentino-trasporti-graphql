import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StopCreateInput } from "../../../inputs/StopCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneStopArgs {
  @TypeGraphQL.Field(_type => StopCreateInput, {
    nullable: false
  })
  data!: StopCreateInput;
}
