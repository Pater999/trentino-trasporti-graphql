import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StopTimeCreateInput } from "../../../inputs/StopTimeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneStopTimeArgs {
  @TypeGraphQL.Field(_type => StopTimeCreateInput, {
    nullable: false
  })
  data!: StopTimeCreateInput;
}
