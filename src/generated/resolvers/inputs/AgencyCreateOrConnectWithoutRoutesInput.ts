import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AgencyCreateWithoutRoutesInput } from "../inputs/AgencyCreateWithoutRoutesInput";
import { AgencyWhereUniqueInput } from "../inputs/AgencyWhereUniqueInput";

@TypeGraphQL.InputType("AgencyCreateOrConnectWithoutRoutesInput", {
  isAbstract: true
})
export class AgencyCreateOrConnectWithoutRoutesInput {
  @TypeGraphQL.Field(_type => AgencyWhereUniqueInput, {
    nullable: false
  })
  where!: AgencyWhereUniqueInput;

  @TypeGraphQL.Field(_type => AgencyCreateWithoutRoutesInput, {
    nullable: false
  })
  create!: AgencyCreateWithoutRoutesInput;
}
