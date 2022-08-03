import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StopTimeUpdateInput } from "../../../inputs/StopTimeUpdateInput";
import { StopTimeWhereUniqueInput } from "../../../inputs/StopTimeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneStopTimeArgs {
  @TypeGraphQL.Field(_type => StopTimeUpdateInput, {
    nullable: false
  })
  data!: StopTimeUpdateInput;

  @TypeGraphQL.Field(_type => StopTimeWhereUniqueInput, {
    nullable: false
  })
  where!: StopTimeWhereUniqueInput;
}
