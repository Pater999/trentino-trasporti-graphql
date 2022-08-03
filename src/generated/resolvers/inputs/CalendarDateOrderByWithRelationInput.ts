import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CalendarOrderByWithRelationInput } from "../inputs/CalendarOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CalendarDateOrderByWithRelationInput", {
  isAbstract: true
})
export class CalendarDateOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  serviceId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CalendarOrderByWithRelationInput, {
    nullable: true
  })
  service?: CalendarOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  exceptionType?: "asc" | "desc" | undefined;
}
