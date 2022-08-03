import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StopCreateInput } from "../../../inputs/StopCreateInput";
import { StopUpdateInput } from "../../../inputs/StopUpdateInput";
import { StopWhereUniqueInput } from "../../../inputs/StopWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneStopArgs {
  @TypeGraphQL.Field(_type => StopWhereUniqueInput, {
    nullable: false
  })
  where!: StopWhereUniqueInput;

  @TypeGraphQL.Field(_type => StopCreateInput, {
    nullable: false
  })
  create!: StopCreateInput;

  @TypeGraphQL.Field(_type => StopUpdateInput, {
    nullable: false
  })
  update!: StopUpdateInput;
}
