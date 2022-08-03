import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AgencyCreateWithoutRoutesInput } from "../inputs/AgencyCreateWithoutRoutesInput";
import { AgencyUpdateWithoutRoutesInput } from "../inputs/AgencyUpdateWithoutRoutesInput";

@TypeGraphQL.InputType("AgencyUpsertWithoutRoutesInput", {
  isAbstract: true
})
export class AgencyUpsertWithoutRoutesInput {
  @TypeGraphQL.Field(_type => AgencyUpdateWithoutRoutesInput, {
    nullable: false
  })
  update!: AgencyUpdateWithoutRoutesInput;

  @TypeGraphQL.Field(_type => AgencyCreateWithoutRoutesInput, {
    nullable: false
  })
  create!: AgencyCreateWithoutRoutesInput;
}
