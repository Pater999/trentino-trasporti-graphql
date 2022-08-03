import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StopUpdateManyMutationInput } from "../../../inputs/StopUpdateManyMutationInput";
import { StopWhereInput } from "../../../inputs/StopWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyStopArgs {
  @TypeGraphQL.Field(_type => StopUpdateManyMutationInput, {
    nullable: false
  })
  data!: StopUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => StopWhereInput, {
    nullable: true
  })
  where?: StopWhereInput | undefined;
}
