import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateManyShapeInputEnvelope } from "../inputs/TripCreateManyShapeInputEnvelope";
import { TripCreateOrConnectWithoutShapeInput } from "../inputs/TripCreateOrConnectWithoutShapeInput";
import { TripCreateWithoutShapeInput } from "../inputs/TripCreateWithoutShapeInput";
import { TripScalarWhereInput } from "../inputs/TripScalarWhereInput";
import { TripUpdateManyWithWhereWithoutShapeInput } from "../inputs/TripUpdateManyWithWhereWithoutShapeInput";
import { TripUpdateWithWhereUniqueWithoutShapeInput } from "../inputs/TripUpdateWithWhereUniqueWithoutShapeInput";
import { TripUpsertWithWhereUniqueWithoutShapeInput } from "../inputs/TripUpsertWithWhereUniqueWithoutShapeInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripUpdateManyWithoutShapeNestedInput", {
  isAbstract: true
})
export class TripUpdateManyWithoutShapeNestedInput {
  @TypeGraphQL.Field(_type => [TripCreateWithoutShapeInput], {
    nullable: true
  })
  create?: TripCreateWithoutShapeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCreateOrConnectWithoutShapeInput], {
    nullable: true
  })
  connectOrCreate?: TripCreateOrConnectWithoutShapeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripUpsertWithWhereUniqueWithoutShapeInput], {
    nullable: true
  })
  upsert?: TripUpsertWithWhereUniqueWithoutShapeInput[] | undefined;

  @TypeGraphQL.Field(_type => TripCreateManyShapeInputEnvelope, {
    nullable: true
  })
  createMany?: TripCreateManyShapeInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TripUpdateWithWhereUniqueWithoutShapeInput], {
    nullable: true
  })
  update?: TripUpdateWithWhereUniqueWithoutShapeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripUpdateManyWithWhereWithoutShapeInput], {
    nullable: true
  })
  updateMany?: TripUpdateManyWithWhereWithoutShapeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TripScalarWhereInput[] | undefined;
}
