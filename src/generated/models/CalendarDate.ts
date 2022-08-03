import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Calendar } from "../models/Calendar";

@TypeGraphQL.ObjectType("CalendarDate", {
  isAbstract: true,
  simpleResolvers: true
})
export class CalendarDate {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  serviceId!: string;

  service?: Calendar;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  exceptionType!: boolean;
}
