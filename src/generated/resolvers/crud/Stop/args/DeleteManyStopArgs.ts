import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StopWhereInput } from "../../../inputs/StopWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyStopArgs {
  @TypeGraphQL.Field(_type => StopWhereInput, {
    nullable: true
  })
  where?: StopWhereInput | undefined;
}
