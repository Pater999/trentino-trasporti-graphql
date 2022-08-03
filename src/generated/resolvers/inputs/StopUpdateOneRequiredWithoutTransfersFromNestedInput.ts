import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopCreateOrConnectWithoutTransfersFromInput } from "../inputs/StopCreateOrConnectWithoutTransfersFromInput";
import { StopCreateWithoutTransfersFromInput } from "../inputs/StopCreateWithoutTransfersFromInput";
import { StopUpdateWithoutTransfersFromInput } from "../inputs/StopUpdateWithoutTransfersFromInput";
import { StopUpsertWithoutTransfersFromInput } from "../inputs/StopUpsertWithoutTransfersFromInput";
import { StopWhereUniqueInput } from "../inputs/StopWhereUniqueInput";

@TypeGraphQL.InputType("StopUpdateOneRequiredWithoutTransfersFromNestedInput", {
  isAbstract: true
})
export class StopUpdateOneRequiredWithoutTransfersFromNestedInput {
  @TypeGraphQL.Field(_type => StopCreateWithoutTransfersFromInput, {
    nullable: true
  })
  create?: StopCreateWithoutTransfersFromInput | undefined;

  @TypeGraphQL.Field(_type => StopCreateOrConnectWithoutTransfersFromInput, {
    nullable: true
  })
  connectOrCreate?: StopCreateOrConnectWithoutTransfersFromInput | undefined;

  @TypeGraphQL.Field(_type => StopUpsertWithoutTransfersFromInput, {
    nullable: true
  })
  upsert?: StopUpsertWithoutTransfersFromInput | undefined;

  @TypeGraphQL.Field(_type => StopWhereUniqueInput, {
    nullable: true
  })
  connect?: StopWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StopUpdateWithoutTransfersFromInput, {
    nullable: true
  })
  update?: StopUpdateWithoutTransfersFromInput | undefined;
}
