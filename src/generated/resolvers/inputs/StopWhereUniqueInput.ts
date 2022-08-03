import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("StopWhereUniqueInput", {
  isAbstract: true
})
export class StopWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  stopId?: string | undefined;
}
