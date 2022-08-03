import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RouteCreateManyAgencyInputEnvelope } from "../inputs/RouteCreateManyAgencyInputEnvelope";
import { RouteCreateOrConnectWithoutAgencyInput } from "../inputs/RouteCreateOrConnectWithoutAgencyInput";
import { RouteCreateWithoutAgencyInput } from "../inputs/RouteCreateWithoutAgencyInput";
import { RouteScalarWhereInput } from "../inputs/RouteScalarWhereInput";
import { RouteUpdateManyWithWhereWithoutAgencyInput } from "../inputs/RouteUpdateManyWithWhereWithoutAgencyInput";
import { RouteUpdateWithWhereUniqueWithoutAgencyInput } from "../inputs/RouteUpdateWithWhereUniqueWithoutAgencyInput";
import { RouteUpsertWithWhereUniqueWithoutAgencyInput } from "../inputs/RouteUpsertWithWhereUniqueWithoutAgencyInput";
import { RouteWhereUniqueInput } from "../inputs/RouteWhereUniqueInput";

@TypeGraphQL.InputType("RouteUpdateManyWithoutAgencyNestedInput", {
  isAbstract: true
})
export class RouteUpdateManyWithoutAgencyNestedInput {
  @TypeGraphQL.Field(_type => [RouteCreateWithoutAgencyInput], {
    nullable: true
  })
  create?: RouteCreateWithoutAgencyInput[] | undefined;

  @TypeGraphQL.Field(_type => [RouteCreateOrConnectWithoutAgencyInput], {
    nullable: true
  })
  connectOrCreate?: RouteCreateOrConnectWithoutAgencyInput[] | undefined;

  @TypeGraphQL.Field(_type => [RouteUpsertWithWhereUniqueWithoutAgencyInput], {
    nullable: true
  })
  upsert?: RouteUpsertWithWhereUniqueWithoutAgencyInput[] | undefined;

  @TypeGraphQL.Field(_type => RouteCreateManyAgencyInputEnvelope, {
    nullable: true
  })
  createMany?: RouteCreateManyAgencyInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [RouteWhereUniqueInput], {
    nullable: true
  })
  set?: RouteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RouteWhereUniqueInput], {
    nullable: true
  })
  disconnect?: RouteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RouteWhereUniqueInput], {
    nullable: true
  })
  delete?: RouteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RouteWhereUniqueInput], {
    nullable: true
  })
  connect?: RouteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RouteUpdateWithWhereUniqueWithoutAgencyInput], {
    nullable: true
  })
  update?: RouteUpdateWithWhereUniqueWithoutAgencyInput[] | undefined;

  @TypeGraphQL.Field(_type => [RouteUpdateManyWithWhereWithoutAgencyInput], {
    nullable: true
  })
  updateMany?: RouteUpdateManyWithWhereWithoutAgencyInput[] | undefined;

  @TypeGraphQL.Field(_type => [RouteScalarWhereInput], {
    nullable: true
  })
  deleteMany?: RouteScalarWhereInput[] | undefined;
}
