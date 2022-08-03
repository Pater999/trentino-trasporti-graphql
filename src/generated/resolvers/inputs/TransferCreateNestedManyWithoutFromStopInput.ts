import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransferCreateManyFromStopInputEnvelope } from "../inputs/TransferCreateManyFromStopInputEnvelope";
import { TransferCreateOrConnectWithoutFromStopInput } from "../inputs/TransferCreateOrConnectWithoutFromStopInput";
import { TransferCreateWithoutFromStopInput } from "../inputs/TransferCreateWithoutFromStopInput";
import { TransferWhereUniqueInput } from "../inputs/TransferWhereUniqueInput";

@TypeGraphQL.InputType("TransferCreateNestedManyWithoutFromStopInput", {
  isAbstract: true
})
export class TransferCreateNestedManyWithoutFromStopInput {
  @TypeGraphQL.Field(_type => [TransferCreateWithoutFromStopInput], {
    nullable: true
  })
  create?: TransferCreateWithoutFromStopInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransferCreateOrConnectWithoutFromStopInput], {
    nullable: true
  })
  connectOrCreate?: TransferCreateOrConnectWithoutFromStopInput[] | undefined;

  @TypeGraphQL.Field(_type => TransferCreateManyFromStopInputEnvelope, {
    nullable: true
  })
  createMany?: TransferCreateManyFromStopInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TransferWhereUniqueInput], {
    nullable: true
  })
  connect?: TransferWhereUniqueInput[] | undefined;
}
