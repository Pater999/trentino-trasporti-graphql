import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StopWhereUniqueInput } from "../../../inputs/StopWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneStopArgs {
  @TypeGraphQL.Field(_type => StopWhereUniqueInput, {
    nullable: false
  })
  where!: StopWhereUniqueInput;
}
