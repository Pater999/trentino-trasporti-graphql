import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TransferCreateInput } from "../../../inputs/TransferCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTransferArgs {
  @TypeGraphQL.Field(_type => TransferCreateInput, {
    nullable: false
  })
  data!: TransferCreateInput;
}
