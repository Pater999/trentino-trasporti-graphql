import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TransferCreateInput } from "../../../inputs/TransferCreateInput";
import { TransferUpdateInput } from "../../../inputs/TransferUpdateInput";
import { TransferWhereUniqueInput } from "../../../inputs/TransferWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTransferArgs {
  @TypeGraphQL.Field(_type => TransferWhereUniqueInput, {
    nullable: false
  })
  where!: TransferWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransferCreateInput, {
    nullable: false
  })
  create!: TransferCreateInput;

  @TypeGraphQL.Field(_type => TransferUpdateInput, {
    nullable: false
  })
  update!: TransferUpdateInput;
}
