import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopCreateWithoutTransfersToInput } from "../inputs/StopCreateWithoutTransfersToInput";
import { StopUpdateWithoutTransfersToInput } from "../inputs/StopUpdateWithoutTransfersToInput";

@TypeGraphQL.InputType("StopUpsertWithoutTransfersToInput", {
  isAbstract: true
})
export class StopUpsertWithoutTransfersToInput {
  @TypeGraphQL.Field(_type => StopUpdateWithoutTransfersToInput, {
    nullable: false
  })
  update!: StopUpdateWithoutTransfersToInput;

  @TypeGraphQL.Field(_type => StopCreateWithoutTransfersToInput, {
    nullable: false
  })
  create!: StopCreateWithoutTransfersToInput;
}
