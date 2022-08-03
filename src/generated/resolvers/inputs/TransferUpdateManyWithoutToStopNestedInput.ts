import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransferCreateManyToStopInputEnvelope } from "../inputs/TransferCreateManyToStopInputEnvelope";
import { TransferCreateOrConnectWithoutToStopInput } from "../inputs/TransferCreateOrConnectWithoutToStopInput";
import { TransferCreateWithoutToStopInput } from "../inputs/TransferCreateWithoutToStopInput";
import { TransferScalarWhereInput } from "../inputs/TransferScalarWhereInput";
import { TransferUpdateManyWithWhereWithoutToStopInput } from "../inputs/TransferUpdateManyWithWhereWithoutToStopInput";
import { TransferUpdateWithWhereUniqueWithoutToStopInput } from "../inputs/TransferUpdateWithWhereUniqueWithoutToStopInput";
import { TransferUpsertWithWhereUniqueWithoutToStopInput } from "../inputs/TransferUpsertWithWhereUniqueWithoutToStopInput";
import { TransferWhereUniqueInput } from "../inputs/TransferWhereUniqueInput";

@TypeGraphQL.InputType("TransferUpdateManyWithoutToStopNestedInput", {
  isAbstract: true
})
export class TransferUpdateManyWithoutToStopNestedInput {
  @TypeGraphQL.Field(_type => [TransferCreateWithoutToStopInput], {
    nullable: true
  })
  create?: TransferCreateWithoutToStopInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransferCreateOrConnectWithoutToStopInput], {
    nullable: true
  })
  connectOrCreate?: TransferCreateOrConnectWithoutToStopInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransferUpsertWithWhereUniqueWithoutToStopInput], {
    nullable: true
  })
  upsert?: TransferUpsertWithWhereUniqueWithoutToStopInput[] | undefined;

  @TypeGraphQL.Field(_type => TransferCreateManyToStopInputEnvelope, {
    nullable: true
  })
  createMany?: TransferCreateManyToStopInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TransferWhereUniqueInput], {
    nullable: true
  })
  set?: TransferWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransferWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TransferWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransferWhereUniqueInput], {
    nullable: true
  })
  delete?: TransferWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransferWhereUniqueInput], {
    nullable: true
  })
  connect?: TransferWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransferUpdateWithWhereUniqueWithoutToStopInput], {
    nullable: true
  })
  update?: TransferUpdateWithWhereUniqueWithoutToStopInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransferUpdateManyWithWhereWithoutToStopInput], {
    nullable: true
  })
  updateMany?: TransferUpdateManyWithWhereWithoutToStopInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransferScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TransferScalarWhereInput[] | undefined;
}
