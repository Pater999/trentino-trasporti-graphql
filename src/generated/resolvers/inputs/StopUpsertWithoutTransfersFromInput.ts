import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopCreateWithoutTransfersFromInput } from "../inputs/StopCreateWithoutTransfersFromInput";
import { StopUpdateWithoutTransfersFromInput } from "../inputs/StopUpdateWithoutTransfersFromInput";

@TypeGraphQL.InputType("StopUpsertWithoutTransfersFromInput", {
  isAbstract: true
})
export class StopUpsertWithoutTransfersFromInput {
  @TypeGraphQL.Field(_type => StopUpdateWithoutTransfersFromInput, {
    nullable: false
  })
  update!: StopUpdateWithoutTransfersFromInput;

  @TypeGraphQL.Field(_type => StopCreateWithoutTransfersFromInput, {
    nullable: false
  })
  create!: StopCreateWithoutTransfersFromInput;
}
