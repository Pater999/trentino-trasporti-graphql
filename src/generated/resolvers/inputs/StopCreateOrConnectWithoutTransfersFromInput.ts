import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopCreateWithoutTransfersFromInput } from "../inputs/StopCreateWithoutTransfersFromInput";
import { StopWhereUniqueInput } from "../inputs/StopWhereUniqueInput";

@TypeGraphQL.InputType("StopCreateOrConnectWithoutTransfersFromInput", {
  isAbstract: true
})
export class StopCreateOrConnectWithoutTransfersFromInput {
  @TypeGraphQL.Field(_type => StopWhereUniqueInput, {
    nullable: false
  })
  where!: StopWhereUniqueInput;

  @TypeGraphQL.Field(_type => StopCreateWithoutTransfersFromInput, {
    nullable: false
  })
  create!: StopCreateWithoutTransfersFromInput;
}
