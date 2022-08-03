import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StopUpdateOneRequiredWithoutTransfersFromNestedInput } from "../inputs/StopUpdateOneRequiredWithoutTransfersFromNestedInput";
import { StopUpdateOneRequiredWithoutTransfersToNestedInput } from "../inputs/StopUpdateOneRequiredWithoutTransfersToNestedInput";

@TypeGraphQL.InputType("TransferUpdateInput", {
  isAbstract: true
})
export class TransferUpdateInput {
  @TypeGraphQL.Field(_type => StopUpdateOneRequiredWithoutTransfersFromNestedInput, {
    nullable: true
  })
  fromStop?: StopUpdateOneRequiredWithoutTransfersFromNestedInput | undefined;

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
