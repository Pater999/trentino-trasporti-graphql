import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CalendarDateUpdateWithoutServiceInput } from "../inputs/CalendarDateUpdateWithoutServiceInput";
import { CalendarDateWhereUniqueInput } from "../inputs/CalendarDateWhereUniqueInput";

@TypeGraphQL.InputType("CalendarDateUpdateWithWhereUniqueWithoutServiceInput", {
  isAbstract: true
})
export class CalendarDateUpdateWithWhereUniqueWithoutServiceInput {
  @TypeGraphQL.Field(_type => CalendarDateWhereUniqueInput, {
    nullable: false
  })
  where!: CalendarDateWhereUniqueInput;

  @TypeGraphQL.Field(_type => CalendarDateUpdateWithoutServiceInput, {
    nullable: false
  })
  data!: CalendarDateUpdateWithoutServiceInput;
}
