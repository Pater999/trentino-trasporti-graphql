import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RouteWhereInput } from "../inputs/RouteWhereInput";

@TypeGraphQL.InputType("RouteRelationFilter", {
  isAbstract: true
})
export class RouteRelationFilter {
  @TypeGraphQL.Field(_type => RouteWhereInput, {
    nullable: true
  })
  is?: RouteWhereInput | undefined;

  @TypeGraphQL.Field(_type => RouteWhereInput, {
    nullable: true
  })
  isNot?: RouteWhereInput | undefined;
}
