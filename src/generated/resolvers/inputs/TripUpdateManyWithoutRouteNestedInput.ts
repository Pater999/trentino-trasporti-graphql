import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateManyRouteInputEnvelope } from "../inputs/TripCreateManyRouteInputEnvelope";
import { TripCreateOrConnectWithoutRouteInput } from "../inputs/TripCreateOrConnectWithoutRouteInput";
import { TripCreateWithoutRouteInput } from "../inputs/TripCreateWithoutRouteInput";
import { TripScalarWhereInput } from "../inputs/TripScalarWhereInput";
import { TripUpdateManyWithWhereWithoutRouteInput } from "../inputs/TripUpdateManyWithWhereWithoutRouteInput";
import { TripUpdateWithWhereUniqueWithoutRouteInput } from "../inputs/TripUpdateWithWhereUniqueWithoutRouteInput";
import { TripUpsertWithWhereUniqueWithoutRouteInput } from "../inputs/TripUpsertWithWhereUniqueWithoutRouteInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripUpdateManyWithoutRouteNestedInput", {
  isAbstract: true
})
export class TripUpdateManyWithoutRouteNestedInput {
  @TypeGraphQL.Field(_type => [TripCreateWithoutRouteInput], {
    nullable: true
  })
  create?: TripCreateWithoutRouteInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCreateOrConnectWithoutRouteInput], {
    nullable: true
  })
  connectOrCreate?: TripCreateOrConnectWithoutRouteInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripUpsertWithWhereUniqueWithoutRouteInput], {
    nullable: true
  })
  upsert?: TripUpsertWithWhereUniqueWithoutRouteInput[] | undefined;

  @TypeGraphQL.Field(_type => TripCreateManyRouteInputEnvelope, {
    nullable: true
  })
  createMany?: TripCreateManyRouteInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TripWhereUniqueInput], {
    nullable: true
  })
  set?: TripWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TripWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripWhereUniqueInput], {
    nullable: true
  })
  delete?: TripWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripWhereUniqueInput], {
    nullable: true
  })
  connect?: TripWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripUpdateWithWhereUniqueWithoutRouteInput], {
    nullable: true
  })
  update?: TripUpdateWithWhereUniqueWithoutRouteInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripUpdateManyWithWhereWithoutRouteInput], {
    nullable: true
  })
  updateMany?: TripUpdateManyWithWhereWithoutRouteInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TripScalarWhereInput[] | undefined;
}
