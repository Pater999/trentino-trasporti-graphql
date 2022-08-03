import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AgencyCreateOrConnectWithoutRoutesInput } from "../inputs/AgencyCreateOrConnectWithoutRoutesInput";
import { AgencyCreateWithoutRoutesInput } from "../inputs/AgencyCreateWithoutRoutesInput";
import { AgencyWhereUniqueInput } from "../inputs/AgencyWhereUniqueInput";

@TypeGraphQL.InputType("AgencyCreateNestedOneWithoutRoutesInput", {
  isAbstract: true
})
export class AgencyCreateNestedOneWithoutRoutesInput {
  @TypeGraphQL.Field(_type => AgencyCreateWithoutRoutesInput, {
    nullable: true
  })
  create?: AgencyCreateWithoutRoutesInput | undefined;

  @TypeGraphQL.Field(_type => AgencyCreateOrConnectWithoutRoutesInput, {
    nullable: true
  })
  connectOrCreate?: AgencyCreateOrConnectWithoutRoutesInput | undefined;

  @TypeGraphQL.Field(_type => AgencyWhereUniqueInput, {
    nullable: true
  })
  connect?: AgencyWhereUniqueInput | undefined;
}
