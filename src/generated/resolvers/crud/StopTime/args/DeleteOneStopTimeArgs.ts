import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StopTimeWhereUniqueInput } from "../../../inputs/StopTimeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneStopTimeArgs {
  @TypeGraphQL.Field(_type => StopTimeWhereUniqueInput, {
    nullable: false
  })
  where!: StopTimeWhereUniqueInput;
}
