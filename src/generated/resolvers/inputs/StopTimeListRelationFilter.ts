import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopTimeWhereInput } from "../inputs/StopTimeWhereInput";

@TypeGraphQL.InputType("StopTimeListRelationFilter", {
  isAbstract: true
})
export class StopTimeListRelationFilter {
  @TypeGraphQL.Field(_type => StopTimeWhereInput, {
    nullable: true
  })
  every?: StopTimeWhereInput | undefined;

  @TypeGraphQL.Field(_type => StopTimeWhereInput, {
    nullable: true
  })
  some?: StopTimeWhereInput | undefined;

  @TypeGraphQL.Field(_type => StopTimeWhereInput, {
    nullable: true
  })
  none?: StopTimeWhereInput | undefined;
}
