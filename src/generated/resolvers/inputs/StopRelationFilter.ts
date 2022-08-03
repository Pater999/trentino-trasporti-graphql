import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopWhereInput } from "../inputs/StopWhereInput";

@TypeGraphQL.InputType("StopRelationFilter", {
  isAbstract: true
})
export class StopRelationFilter {
  @TypeGraphQL.Field(_type => StopWhereInput, {
    nullable: true
  })
  is?: StopWhereInput | undefined;

  @TypeGraphQL.Field(_type => StopWhereInput, {
    nullable: true
  })
  isNot?: StopWhereInput | undefined;
}
