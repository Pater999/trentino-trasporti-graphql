import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopTimeCreateManyTripInputEnvelope } from "../inputs/StopTimeCreateManyTripInputEnvelope";
import { StopTimeCreateOrConnectWithoutTripInput } from "../inputs/StopTimeCreateOrConnectWithoutTripInput";
import { StopTimeCreateWithoutTripInput } from "../inputs/StopTimeCreateWithoutTripInput";
import { StopTimeScalarWhereInput } from "../inputs/StopTimeScalarWhereInput";
import { StopTimeUpdateManyWithWhereWithoutTripInput } from "../inputs/StopTimeUpdateManyWithWhereWithoutTripInput";
import { StopTimeUpdateWithWhereUniqueWithoutTripInput } from "../inputs/StopTimeUpdateWithWhereUniqueWithoutTripInput";
import { StopTimeUpsertWithWhereUniqueWithoutTripInput } from "../inputs/StopTimeUpsertWithWhereUniqueWithoutTripInput";
import { StopTimeWhereUniqueInput } from "../inputs/StopTimeWhereUniqueInput";

@TypeGraphQL.InputType("StopTimeUpdateManyWithoutTripNestedInput", {
  isAbstract: true
})
export class StopTimeUpdateManyWithoutTripNestedInput {
  @TypeGraphQL.Field(_type => [StopTimeCreateWithoutTripInput], {
    nullable: true
  })
  create?: StopTimeCreateWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => [StopTimeCreateOrConnectWithoutTripInput], {
    nullable: true
  })
  connectOrCreate?: StopTimeCreateOrConnectWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => [StopTimeUpsertWithWhereUniqueWithoutTripInput], {
    nullable: true
  })
  upsert?: StopTimeUpsertWithWhereUniqueWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => StopTimeCreateManyTripInputEnvelope, {
    nullable: true
  })
  createMany?: StopTimeCreateManyTripInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [StopTimeUpdateWithWhereUniqueWithoutTripInput], {
    nullable: true
  })
  update?: StopTimeUpdateWithWhereUniqueWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => [StopTimeUpdateManyWithWhereWithoutTripInput], {
    nullable: true
  })
  updateMany?: StopTimeUpdateManyWithWhereWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => [StopTimeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: StopTimeScalarWhereInput[] | undefined;
}
