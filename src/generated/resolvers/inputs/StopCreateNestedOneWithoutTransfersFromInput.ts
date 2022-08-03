import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopCreateOrConnectWithoutTransfersFromInput } from "../inputs/StopCreateOrConnectWithoutTransfersFromInput";
import { StopCreateWithoutTransfersFromInput } from "../inputs/StopCreateWithoutTransfersFromInput";
import { StopWhereUniqueInput } from "../inputs/StopWhereUniqueInput";

@TypeGraphQL.InputType("StopCreateNestedOneWithoutTransfersFromInput", {
  isAbstract: true
})
export class StopCreateNestedOneWithoutTransfersFromInput {
  @TypeGraphQL.Field(_type => StopCreateWithoutTransfersFromInput, {
    nullable: true
  })
  create?: StopCreateWithoutTransfersFromInput | undefined;

  @TypeGraphQL.Field(_type => StopCreateOrConnectWithoutTransfersFromInput, {
    nullable: true
  })
  connectOrCreate?: StopCreateOrConnectWithoutTransfersFromInput | undefined;

  @TypeGraphQL.Field(_type => StopWhereUniqueInput, {
    nullable: true
  })
  connect?: StopWhereUniqueInput | undefined;
}
