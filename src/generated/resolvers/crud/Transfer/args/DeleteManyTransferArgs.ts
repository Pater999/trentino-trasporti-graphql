import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TransferWhereInput } from "../../../inputs/TransferWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTransferArgs {
  @TypeGraphQL.Field(_type => TransferWhereInput, {
    nullable: true
  })
  where?: TransferWhereInput | undefined;
}
