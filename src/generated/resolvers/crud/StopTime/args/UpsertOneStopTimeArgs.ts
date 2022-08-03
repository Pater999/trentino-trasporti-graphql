import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StopTimeCreateInput } from "../../../inputs/StopTimeCreateInput";
import { StopTimeUpdateInput } from "../../../inputs/StopTimeUpdateInput";
import { StopTimeWhereUniqueInput } from "../../../inputs/StopTimeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneStopTimeArgs {
  @TypeGraphQL.Field(_type => StopTimeWhereUniqueInput, {
    nullable: false
  })
  where!: StopTimeWhereUniqueInput;

  @TypeGraphQL.Field(_type => StopTimeCreateInput, {
    nullable: false
  })
  create!: StopTimeCreateInput;

  @TypeGraphQL.Field(_type => StopTimeUpdateInput, {
    nullable: false
  })
  update!: StopTimeUpdateInput;
}
