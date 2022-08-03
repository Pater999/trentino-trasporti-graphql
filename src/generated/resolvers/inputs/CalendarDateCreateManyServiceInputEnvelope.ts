import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CalendarDateCreateManyServiceInput } from "../inputs/CalendarDateCreateManyServiceInput";

@TypeGraphQL.InputType("CalendarDateCreateManyServiceInputEnvelope", {
  isAbstract: true
})
export class CalendarDateCreateManyServiceInputEnvelope {
  @TypeGraphQL.Field(_type => [CalendarDateCreateManyServiceInput], {
    nullable: false
  })
  data!: CalendarDateCreateManyServiceInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
