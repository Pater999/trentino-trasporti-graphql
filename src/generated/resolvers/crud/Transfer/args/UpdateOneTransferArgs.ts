import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TransferUpdateInput } from "../../../inputs/TransferUpdateInput";
import { TransferWhereUniqueInput } from "../../../inputs/TransferWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTransferArgs {
  @TypeGraphQL.Field(_type => TransferUpdateInput, {
    nullable: false
  })
  data!: TransferUpdateInput;

  @TypeGraphQL.Field(_type => TransferWhereUniqueInput, {
    nullable: false
  })
  where!: TransferWhereUniqueInput;
}
