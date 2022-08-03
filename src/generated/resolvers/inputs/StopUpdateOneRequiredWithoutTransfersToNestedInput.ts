import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopCreateOrConnectWithoutTransfersToInput } from "../inputs/StopCreateOrConnectWithoutTransfersToInput";
import { StopCreateWithoutTransfersToInput } from "../inputs/StopCreateWithoutTransfersToInput";
import { StopUpdateWithoutTransfersToInput } from "../inputs/StopUpdateWithoutTransfersToInput";
import { StopUpsertWithoutTransfersToInput } from "../inputs/StopUpsertWithoutTransfersToInput";
import { StopWhereUniqueInput } from "../inputs/StopWhereUniqueInput";

@TypeGraphQL.InputType("StopUpdateOneRequiredWithoutTransfersToNestedInput", {
  isAbstract: true
})
export class StopUpdateOneRequiredWithoutTransfersToNestedInput {
  @TypeGraphQL.Field(_type => StopCreateWithoutTransfersToInput, {
    nullable: true
  })
  create?: StopCreateWithoutTransfersToInput | undefined;

  @TypeGraphQL.Field(_type => StopCreateOrConnectWithoutTransfersToInput, {
    nullable: true
  })
  connectOrCreate?: StopCreateOrConnectWithoutTransfersToInput | undefined;

  @TypeGraphQL.Field(_type => StopUpsertWithoutTransfersToInput, {
    nullable: true
  })
  upsert?: StopUpsertWithoutTransfersToInput | undefined;

  @TypeGraphQL.Field(_type => StopWhereUniqueInput, {
    nullable: true
  })
  connect?: StopWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StopUpdateWithoutTransfersToInput, {
    nullable: true
  })
  update?: StopUpdateWithoutTransfersToInput | undefined;
}
