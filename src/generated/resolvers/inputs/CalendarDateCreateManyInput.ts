import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("CalendarDateCreateManyInput", {
  isAbstract: true
})
export class CalendarDateCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  serviceId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  exceptionType!: boolean;
}
