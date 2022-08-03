import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("TripWhereUniqueInput", {
  isAbstract: true
})
export class TripWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tripId?: string | undefined;
}
