import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StopUpdateInput } from "../../../inputs/StopUpdateInput";
import { StopWhereUniqueInput } from "../../../inputs/StopWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneStopArgs {
  @TypeGraphQL.Field(_type => StopUpdateInput, {
    nullable: false
  })
  data!: StopUpdateInput;

  @TypeGraphQL.Field(_type => StopWhereUniqueInput, {
    nullable: false
  })
  where!: StopWhereUniqueInput;
}
