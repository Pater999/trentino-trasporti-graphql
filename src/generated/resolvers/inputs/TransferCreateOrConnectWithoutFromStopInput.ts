import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransferCreateWithoutFromStopInput } from "../inputs/TransferCreateWithoutFromStopInput";
import { TransferWhereUniqueInput } from "../inputs/TransferWhereUniqueInput";

@TypeGraphQL.InputType("TransferCreateOrConnectWithoutFromStopInput", {
  isAbstract: true
})
export class TransferCreateOrConnectWithoutFromStopInput {
  @TypeGraphQL.Field(_type => TransferWhereUniqueInput, {
    nullable: false
  })
  where!: TransferWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransferCreateWithoutFromStopInput, {
    nullable: false
  })
  create!: TransferCreateWithoutFromStopInput;
}
