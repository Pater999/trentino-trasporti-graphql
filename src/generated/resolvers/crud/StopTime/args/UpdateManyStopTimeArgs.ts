import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StopTimeUpdateManyMutationInput } from "../../../inputs/StopTimeUpdateManyMutationInput";
import { StopTimeWhereInput } from "../../../inputs/StopTimeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyStopTimeArgs {
  @TypeGraphQL.Field(_type => StopTimeUpdateManyMutationInput, {
    nullable: false
  })
  data!: StopTimeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => StopTimeWhereInput, {
    nullable: true
  })
  where?: StopTimeWhereInput | undefined;
}
