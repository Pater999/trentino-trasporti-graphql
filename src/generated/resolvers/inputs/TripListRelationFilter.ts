import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripWhereInput } from "../inputs/TripWhereInput";

@TypeGraphQL.InputType("TripListRelationFilter", {
  isAbstract: true
})
export class TripListRelationFilter {
  @TypeGraphQL.Field(_type => TripWhereInput, {
    nullable: true
  })
  every?: TripWhereInput | undefined;

  @TypeGraphQL.Field(_type => TripWhereInput, {
    nullable: true
  })
  some?: TripWhereInput | undefined;

  @TypeGraphQL.Field(_type => TripWhereInput, {
    nullable: true
  })
  none?: TripWhereInput | undefined;
}
