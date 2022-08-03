import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CalendarDateScalarWhereInput } from "../inputs/CalendarDateScalarWhereInput";
import { CalendarDateUpdateManyMutationInput } from "../inputs/CalendarDateUpdateManyMutationInput";

@TypeGraphQL.InputType("CalendarDateUpdateManyWithWhereWithoutServiceInput", {
  isAbstract: true
})
export class CalendarDateUpdateManyWithWhereWithoutServiceInput {
  @TypeGraphQL.Field(_type => CalendarDateScalarWhereInput, {
    nullable: false
  })
  where!: CalendarDateScalarWhereInput;

  @TypeGraphQL.Field(_type => CalendarDateUpdateManyMutationInput, {
    nullable: false
  })
  data!: CalendarDateUpdateManyMutationInput;
}
