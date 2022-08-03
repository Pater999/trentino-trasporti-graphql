import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopTimeCreateManyStopInputEnvelope } from "../inputs/StopTimeCreateManyStopInputEnvelope";
import { StopTimeCreateOrConnectWithoutStopInput } from "../inputs/StopTimeCreateOrConnectWithoutStopInput";
import { StopTimeCreateWithoutStopInput } from "../inputs/StopTimeCreateWithoutStopInput";
import { StopTimeScalarWhereInput } from "../inputs/StopTimeScalarWhereInput";
import { StopTimeUpdateManyWithWhereWithoutStopInput } from "../inputs/StopTimeUpdateManyWithWhereWithoutStopInput";
import { StopTimeUpdateWithWhereUniqueWithoutStopInput } from "../inputs/StopTimeUpdateWithWhereUniqueWithoutStopInput";
import { StopTimeUpsertWithWhereUniqueWithoutStopInput } from "../inputs/StopTimeUpsertWithWhereUniqueWithoutStopInput";
import { StopTimeWhereUniqueInput } from "../inputs/StopTimeWhereUniqueInput";

@TypeGraphQL.InputType("StopTimeUpdateManyWithoutStopNestedInput", {
  isAbstract: true
})
export class StopTimeUpdateManyWithoutStopNestedInput {
  @TypeGraphQL.Field(_type => [StopTimeCreateWithoutStopInput], {
    nullable: true
  })
  create?: StopTimeCreateWithoutStopInput[] | undefined;

  @TypeGraphQL.Field(_type => [StopTimeCreateOrConnectWithoutStopInput], {
    nullable: true
  })
  connectOrCreate?: StopTimeCreateOrConnectWithoutStopInput[] | undefined;

  @TypeGraphQL.Field(_type => [StopTimeUpsertWithWhereUniqueWithoutStopInput], {
    nullable: true
  })
  upsert?: StopTimeUpsertWithWhereUniqueWithoutStopInput[] | undefined;

  @TypeGraphQL.Field(_type => StopTimeCreateManyStopInputEnvelope, {
    nullable: true
  })
  createMany?: StopTimeCreateManyStopInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [StopTimeWhereUniqueInput], {
    nullable: true
  })
  set?: StopTimeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StopTimeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: StopTimeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StopTimeWhereUniqueInput], {
    nullable: true
  })
  delete?: StopTimeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StopTimeWhereUniqueInput], {
    nullable: true
  })
  connect?: StopTimeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StopTimeUpdateWithWhereUniqueWithoutStopInput], {
    nullable: true
  })
  update?: StopTimeUpdateWithWhereUniqueWithoutStopInput[] | undefined;

  @TypeGraphQL.Field(_type => [StopTimeUpdateManyWithWhereWithoutStopInput], {
    nullable: true
  })
  updateMany?: StopTimeUpdateManyWithWhereWithoutStopInput[] | undefined;

  @TypeGraphQL.Field(_type => [StopTimeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: StopTimeScalarWhereInput[] | undefined;
}
