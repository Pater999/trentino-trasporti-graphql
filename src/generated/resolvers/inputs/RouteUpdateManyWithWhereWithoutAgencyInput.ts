import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RouteScalarWhereInput } from "../inputs/RouteScalarWhereInput";
import { RouteUpdateManyMutationInput } from "../inputs/RouteUpdateManyMutationInput";

@TypeGraphQL.InputType("RouteUpdateManyWithWhereWithoutAgencyInput", {
  isAbstract: true
})
export class RouteUpdateManyWithWhereWithoutAgencyInput {
  @TypeGraphQL.Field(_type => RouteScalarWhereInput, {
    nullable: false
  })
  where!: RouteScalarWhereInput;

  @TypeGraphQL.Field(_type => RouteUpdateManyMutationInput, {
    nullable: false
  })
  data!: RouteUpdateManyMutationInput;
}
