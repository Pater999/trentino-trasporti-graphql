import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateManyServiceInputEnvelope } from "../inputs/TripCreateManyServiceInputEnvelope";
import { TripCreateOrConnectWithoutServiceInput } from "../inputs/TripCreateOrConnectWithoutServiceInput";
import { TripCreateWithoutServiceInput } from "../inputs/TripCreateWithoutServiceInput";
import { TripScalarWhereInput } from "../inputs/TripScalarWhereInput";
import { TripUpdateManyWithWhereWithoutServiceInput } from "../inputs/TripUpdateManyWithWhereWithoutServiceInput";
import { TripUpdateWithWhereUniqueWithoutServiceInput } from "../inputs/TripUpdateWithWhereUniqueWithoutServiceInput";
import { TripUpsertWithWhereUniqueWithoutServiceInput } from "../inputs/TripUpsertWithWhereUniqueWithoutServiceInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripUpdateManyWithoutServiceNestedInput", {
  isAbstract: true
})
export class TripUpdateManyWithoutServiceNestedInput {
  @TypeGraphQL.Field(_type => [TripCreateWithoutServiceInput], {
    nullable: true
  })
  create?: TripCreateWithoutServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCreateOrConnectWithoutServiceInput], {
    nullable: true
  })
  connectOrCreate?: TripCreateOrConnectWithoutServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripUpsertWithWhereUniqueWithoutServiceInput], {
    nullable: true
  })
  upsert?: TripUpsertWithWhereUniqueWithoutServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => TripCreateManyServiceInputEnvelope, {
    nullable: true
  })
  createMany?: TripCreateManyServiceInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TripUpdateWithWhereUniqueWithoutServiceInput], {
    nullable: true
  })
  update?: TripUpdateWithWhereUniqueWithoutServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripUpdateManyWithWhereWithoutServiceInput], {
    nullable: true
  })
  updateMany?: TripUpdateManyWithWhereWithoutServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TripScalarWhereInput[] | undefined;
}
