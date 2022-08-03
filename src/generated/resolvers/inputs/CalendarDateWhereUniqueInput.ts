import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CalendarDateServiceIdDateCompoundUniqueInput } from "../inputs/CalendarDateServiceIdDateCompoundUniqueInput";

@TypeGraphQL.InputType("CalendarDateWhereUniqueInput", {
  isAbstract: true
})
export class CalendarDateWhereUniqueInput {
  @TypeGraphQL.Field(_type => CalendarDateServiceIdDateCompoundUniqueInput, {
    nullable: true
  })
  serviceId_date?: CalendarDateServiceIdDateCompoundUniqueInput | undefined;
}
