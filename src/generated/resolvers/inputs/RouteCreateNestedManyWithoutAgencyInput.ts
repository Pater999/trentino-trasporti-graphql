import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RouteCreateManyAgencyInputEnvelope } from "../inputs/RouteCreateManyAgencyInputEnvelope";
import { RouteCreateOrConnectWithoutAgencyInput } from "../inputs/RouteCreateOrConnectWithoutAgencyInput";
import { RouteCreateWithoutAgencyInput } from "../inputs/RouteCreateWithoutAgencyInput";
import { RouteWhereUniqueInput } from "../inputs/RouteWhereUniqueInput";

@TypeGraphQL.InputType("RouteCreateNestedManyWithoutAgencyInput", {
  isAbstract: true
})
export class RouteCreateNestedManyWithoutAgencyInput {
  @TypeGraphQL.Field(_type => [RouteCreateWithoutAgencyInput], {
    nullable: true
  })
  create?: RouteCreateWithoutAgencyInput[] | undefined;

  @TypeGraphQL.Field(_type => [RouteCreateOrConnectWithoutAgencyInput], {
    nullable: true
  })
  connectOrCreate?: RouteCreateOrConnectWithoutAgencyInput[] | undefined;

  @TypeGraphQL.Field(_type => RouteCreateManyAgencyInputEnvelope, {
    nullable: true
  })
  createMany?: RouteCreateManyAgencyInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [RouteWhereUniqueInput], {
    nullable: true
  })
  connect?: RouteWhereUniqueInput[] | undefined;
}
