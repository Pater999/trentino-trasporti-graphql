import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopCreateNestedOneWithoutTransfersFromInput } from "../inputs/StopCreateNestedOneWithoutTransfersFromInput";
import { StopCreateNestedOneWithoutTransfersToInput } from "../inputs/StopCreateNestedOneWithoutTransfersToInput";

@TypeGraphQL.InputType("TransferCreateInput", {
  isAbstract: true
})
export class TransferCreateInput {
  @TypeGraphQL.Field(_type => StopCreateNestedOneWithoutTransfersFromInput, {
    nullable: false
  })
  fromStop!: StopCreateNestedOneWithoutTransfersFromInput;

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
