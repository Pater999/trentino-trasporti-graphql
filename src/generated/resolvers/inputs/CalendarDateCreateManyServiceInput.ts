import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("CalendarDateCreateManyServiceInput", {
  isAbstract: true
})
export class CalendarDateCreateManyServiceInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  exceptionType!: boolean;
}
