import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StopUpdateOneRequiredWithoutTransfersToNestedInput } from "../inputs/StopUpdateOneRequiredWithoutTransfersToNestedInput";

@TypeGraphQL.InputType("TransferUpdateWithoutFromStopInput", {
  isAbstract: true
})
export class TransferUpdateWithoutFromStopInput {
  @TypeGraphQL.Field(_type => StopUpdateOneRequiredWithoutTransfersToNestedInput, {
    nullable: true
  })
  toStop?: StopUpdateOneRequiredWithoutTransfersToNestedInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  transferType?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  minTransferTime?: IntFieldUpdateOperationsInput | undefined;
}
