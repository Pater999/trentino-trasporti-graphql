import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("CalendarDateMaxAggregate", {
  isAbstract: true,
  simpleResolvers: true
})
export class CalendarDateMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  serviceId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date!: Date | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  exceptionType!: boolean | null;
}
