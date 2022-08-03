import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RouteCreateWithoutAgencyInput } from "../inputs/RouteCreateWithoutAgencyInput";
import { RouteWhereUniqueInput } from "../inputs/RouteWhereUniqueInput";

@TypeGraphQL.InputType("RouteCreateOrConnectWithoutAgencyInput", {
  isAbstract: true
})
export class RouteCreateOrConnectWithoutAgencyInput {
  @TypeGraphQL.Field(_type => RouteWhereUniqueInput, {
    nullable: false
  })
  where!: RouteWhereUniqueInput;

  @TypeGraphQL.Field(_type => RouteCreateWithoutAgencyInput, {
    nullable: false
  })
  create!: RouteCreateWithoutAgencyInput;
}
