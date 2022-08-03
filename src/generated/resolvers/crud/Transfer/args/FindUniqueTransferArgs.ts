import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TransferWhereUniqueInput } from "../../../inputs/TransferWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTransferArgs {
  @TypeGraphQL.Field(_type => TransferWhereUniqueInput, {
    nullable: false
  })
  where!: TransferWhereUniqueInput;
}
