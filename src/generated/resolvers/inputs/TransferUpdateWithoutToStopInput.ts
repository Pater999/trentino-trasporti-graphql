import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StopUpdateOneRequiredWithoutTransfersFromNestedInput } from "../inputs/StopUpdateOneRequiredWithoutTransfersFromNestedInput";

@TypeGraphQL.InputType("TransferUpdateWithoutToStopInput", {
  isAbstract: true
})
export class TransferUpdateWithoutToStopInput {
  @TypeGraphQL.Field(_type => StopUpdateOneRequiredWithoutTransfersFromNestedInput, {
    nullable: true
  })
  fromStop?: StopUpdateOneRequiredWithoutTransfersFromNestedInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  transferType?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  minTransferTime?: IntFieldUpdateOperationsInput | undefined;
}
