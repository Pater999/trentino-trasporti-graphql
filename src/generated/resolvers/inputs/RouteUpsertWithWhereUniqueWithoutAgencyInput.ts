import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RouteCreateWithoutAgencyInput } from "../inputs/RouteCreateWithoutAgencyInput";
import { RouteUpdateWithoutAgencyInput } from "../inputs/RouteUpdateWithoutAgencyInput";
import { RouteWhereUniqueInput } from "../inputs/RouteWhereUniqueInput";

@TypeGraphQL.InputType("RouteUpsertWithWhereUniqueWithoutAgencyInput", {
  isAbstract: true
})
export class RouteUpsertWithWhereUniqueWithoutAgencyInput {
  @TypeGraphQL.Field(_type => RouteWhereUniqueInput, {
    nullable: false
  })
  where!: RouteWhereUniqueInput;

  @TypeGraphQL.Field(_type => RouteUpdateWithoutAgencyInput, {
    nullable: false
  })
  update!: RouteUpdateWithoutAgencyInput;

  @TypeGraphQL.Field(_type => RouteCreateWithoutAgencyInput, {
    nullable: false
  })
  create!: RouteCreateWithoutAgencyInput;
}
