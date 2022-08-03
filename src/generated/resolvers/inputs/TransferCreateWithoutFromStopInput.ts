import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopCreateNestedOneWithoutTransfersToInput } from "../inputs/StopCreateNestedOneWithoutTransfersToInput";

@TypeGraphQL.InputType("TransferCreateWithoutFromStopInput", {
  isAbstract: true
})
export class TransferCreateWithoutFromStopInput {
  @TypeGraphQL.Field(_type => StopCreateNestedOneWithoutTransfersToInput, {
    nullable: false
  })
  toStop!: StopCreateNestedOneWithoutTransfersToInput;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  transferType!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  minTransferTime!: number;
}
