import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StopTimeWhereInput } from "../../../inputs/StopTimeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyStopTimeArgs {
  @TypeGraphQL.Field(_type => StopTimeWhereInput, {
    nullable: true
  })
  where?: StopTimeWhereInput | undefined;
}
