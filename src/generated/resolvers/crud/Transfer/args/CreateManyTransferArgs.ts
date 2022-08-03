import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TransferCreateManyInput } from "../../../inputs/TransferCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTransferArgs {
  @TypeGraphQL.Field(_type => [TransferCreateManyInput], {
    nullable: false
  })
  data!: TransferCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
