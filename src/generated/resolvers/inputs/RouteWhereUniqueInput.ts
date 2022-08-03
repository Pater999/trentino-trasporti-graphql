import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("RouteWhereUniqueInput", {
  isAbstract: true
})
export class RouteWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  routeId?: string | undefined;
}
