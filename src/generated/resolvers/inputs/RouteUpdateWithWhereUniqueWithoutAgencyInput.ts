import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RouteUpdateWithoutAgencyInput } from "../inputs/RouteUpdateWithoutAgencyInput";
import { RouteWhereUniqueInput } from "../inputs/RouteWhereUniqueInput";

@TypeGraphQL.InputType("RouteUpdateWithWhereUniqueWithoutAgencyInput", {
  isAbstract: true
})
export class RouteUpdateWithWhereUniqueWithoutAgencyInput {
  @TypeGraphQL.Field(_type => RouteWhereUniqueInput, {
    nullable: false
  })
  where!: RouteWhereUniqueInput;

  @TypeGraphQL.Field(_type => RouteUpdateWithoutAgencyInput, {
    nullable: false
  })
  data!: RouteUpdateWithoutAgencyInput;
}
