import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransferCreateManyFromStopInputEnvelope } from "../inputs/TransferCreateManyFromStopInputEnvelope";
import { TransferCreateOrConnectWithoutFromStopInput } from "../inputs/TransferCreateOrConnectWithoutFromStopInput";
import { TransferCreateWithoutFromStopInput } from "../inputs/TransferCreateWithoutFromStopInput";
import { TransferScalarWhereInput } from "../inputs/TransferScalarWhereInput";
import { TransferUpdateManyWithWhereWithoutFromStopInput } from "../inputs/TransferUpdateManyWithWhereWithoutFromStopInput";
import { TransferUpdateWithWhereUniqueWithoutFromStopInput } from "../inputs/TransferUpdateWithWhereUniqueWithoutFromStopInput";
import { TransferUpsertWithWhereUniqueWithoutFromStopInput } from "../inputs/TransferUpsertWithWhereUniqueWithoutFromStopInput";
import { TransferWhereUniqueInput } from "../inputs/TransferWhereUniqueInput";

@TypeGraphQL.InputType("TransferUpdateManyWithoutFromStopNestedInput", {
  isAbstract: true
})
export class TransferUpdateManyWithoutFromStopNestedInput {
  @TypeGraphQL.Field(_type => [TransferCreateWithoutFromStopInput], {
    nullable: true
  })
  create?: TransferCreateWithoutFromStopInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransferCreateOrConnectWithoutFromStopInput], {
    nullable: true
  })
  connectOrCreate?: TransferCreateOrConnectWithoutFromStopInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransferUpsertWithWhereUniqueWithoutFromStopInput], {
    nullable: true
  })
  upsert?: TransferUpsertWithWhereUniqueWithoutFromStopInput[] | undefined;

  @TypeGraphQL.Field(_type => TransferCreateManyFromStopInputEnvelope, {
    nullable: true
  })
  createMany?: TransferCreateManyFromStopInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TransferUpdateWithWhereUniqueWithoutFromStopInput], {
    nullable: true
  })
  update?: TransferUpdateWithWhereUniqueWithoutFromStopInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransferUpdateManyWithWhereWithoutFromStopInput], {
    nullable: true
  })
  updateMany?: TransferUpdateManyWithWhereWithoutFromStopInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransferScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TransferScalarWhereInput[] | undefined;
}
