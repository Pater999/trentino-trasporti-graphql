import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TransferUpdateManyMutationInput } from "../../../inputs/TransferUpdateManyMutationInput";
import { TransferWhereInput } from "../../../inputs/TransferWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTransferArgs {
  @TypeGraphQL.Field(_type => TransferUpdateManyMutationInput, {
    nullable: false
  })
  data!: TransferUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TransferWhereInput, {
    nullable: true
  })
  where?: TransferWhereInput | undefined;
}
