import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AgencyWhereInput } from "../inputs/AgencyWhereInput";

@TypeGraphQL.InputType("AgencyRelationFilter", {
  isAbstract: true
})
export class AgencyRelationFilter {
  @TypeGraphQL.Field(_type => AgencyWhereInput, {
    nullable: true
  })
  is?: AgencyWhereInput | undefined;

  @TypeGraphQL.Field(_type => AgencyWhereInput, {
    nullable: true
  })
  isNot?: AgencyWhereInput | undefined;
}
