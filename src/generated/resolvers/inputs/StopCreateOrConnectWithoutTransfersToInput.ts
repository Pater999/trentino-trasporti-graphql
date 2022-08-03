import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopCreateWithoutTransfersToInput } from "../inputs/StopCreateWithoutTransfersToInput";
import { StopWhereUniqueInput } from "../inputs/StopWhereUniqueInput";

@TypeGraphQL.InputType("StopCreateOrConnectWithoutTransfersToInput", {
  isAbstract: true
})
export class StopCreateOrConnectWithoutTransfersToInput {
  @TypeGraphQL.Field(_type => StopWhereUniqueInput, {
    nullable: false
  })
  where!: StopWhereUniqueInput;

  @TypeGraphQL.Field(_type => StopCreateWithoutTransfersToInput, {
    nullable: false
  })
  create!: StopCreateWithoutTransfersToInput;
}
