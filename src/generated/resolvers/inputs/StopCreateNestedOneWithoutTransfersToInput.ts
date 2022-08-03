import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopCreateOrConnectWithoutTransfersToInput } from "../inputs/StopCreateOrConnectWithoutTransfersToInput";
import { StopCreateWithoutTransfersToInput } from "../inputs/StopCreateWithoutTransfersToInput";
import { StopWhereUniqueInput } from "../inputs/StopWhereUniqueInput";

@TypeGraphQL.InputType("StopCreateNestedOneWithoutTransfersToInput", {
  isAbstract: true
})
export class StopCreateNestedOneWithoutTransfersToInput {
  @TypeGraphQL.Field(_type => StopCreateWithoutTransfersToInput, {
    nullable: true
  })
  create?: StopCreateWithoutTransfersToInput | undefined;

  @TypeGraphQL.Field(_type => StopCreateOrConnectWithoutTransfersToInput, {
    nullable: true
  })
  connectOrCreate?: StopCreateOrConnectWithoutTransfersToInput | undefined;

  @TypeGraphQL.Field(_type => StopWhereUniqueInput, {
    nullable: true
  })
  connect?: StopWhereUniqueInput | undefined;
}
