import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CalendarWhereInput } from "../inputs/CalendarWhereInput";

@TypeGraphQL.InputType("CalendarRelationFilter", {
  isAbstract: true
})
export class CalendarRelationFilter {
  @TypeGraphQL.Field(_type => CalendarWhereInput, {
    nullable: true
  })
  is?: CalendarWhereInput | undefined;

  @TypeGraphQL.Field(_type => CalendarWhereInput, {
    nullable: true
  })
  isNot?: CalendarWhereInput | undefined;
}
