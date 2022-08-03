import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CalendarDateWhereInput } from "../inputs/CalendarDateWhereInput";

@TypeGraphQL.InputType("CalendarDateListRelationFilter", {
  isAbstract: true
})
export class CalendarDateListRelationFilter {
  @TypeGraphQL.Field(_type => CalendarDateWhereInput, {
    nullable: true
  })
  every?: CalendarDateWhereInput | undefined;

  @TypeGraphQL.Field(_type => CalendarDateWhereInput, {
    nullable: true
  })
  some?: CalendarDateWhereInput | undefined;

  @TypeGraphQL.Field(_type => CalendarDateWhereInput, {
    nullable: true
  })
  none?: CalendarDateWhereInput | undefined;
}
