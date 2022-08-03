import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RouteWhereInput } from "../inputs/RouteWhereInput";

@TypeGraphQL.InputType("RouteListRelationFilter", {
  isAbstract: true
})
export class RouteListRelationFilter {
  @TypeGraphQL.Field(_type => RouteWhereInput, {
    nullable: true
  })
  every?: RouteWhereInput | undefined;

  @TypeGraphQL.Field(_type => RouteWhereInput, {
    nullable: true
  })
  some?: RouteWhereInput | undefined;

  @TypeGraphQL.Field(_type => RouteWhereInput, {
    nullable: true
  })
  none?: RouteWhereInput | undefined;
}
