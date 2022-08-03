import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransferCreateManyToStopInputEnvelope } from "../inputs/TransferCreateManyToStopInputEnvelope";
import { TransferCreateOrConnectWithoutToStopInput } from "../inputs/TransferCreateOrConnectWithoutToStopInput";
import { TransferCreateWithoutToStopInput } from "../inputs/TransferCreateWithoutToStopInput";
import { TransferWhereUniqueInput } from "../inputs/TransferWhereUniqueInput";

@TypeGraphQL.InputType("TransferCreateNestedManyWithoutToStopInput", {
  isAbstract: true
})
export class TransferCreateNestedManyWithoutToStopInput {
  @TypeGraphQL.Field(_type => [TransferCreateWithoutToStopInput], {
    nullable: true
  })
  create?: TransferCreateWithoutToStopInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransferCreateOrConnectWithoutToStopInput], {
    nullable: true
  })
  connectOrCreate?: TransferCreateOrConnectWithoutToStopInput[] | undefined;

  @TypeGraphQL.Field(_type => TransferCreateManyToStopInputEnvelope, {
    nullable: true
  })
  createMany?: TransferCreateManyToStopInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TransferWhereUniqueInput], {
    nullable: true
  })
  connect?: TransferWhereUniqueInput[] | undefined;
}
