import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransferCreateWithoutToStopInput } from "../inputs/TransferCreateWithoutToStopInput";
import { TransferWhereUniqueInput } from "../inputs/TransferWhereUniqueInput";

@TypeGraphQL.InputType("TransferCreateOrConnectWithoutToStopInput", {
  isAbstract: true
})
export class TransferCreateOrConnectWithoutToStopInput {
  @TypeGraphQL.Field(_type => TransferWhereUniqueInput, {
    nullable: false
  })
  where!: TransferWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransferCreateWithoutToStopInput, {
    nullable: false
  })
  create!: TransferCreateWithoutToStopInput;
}
