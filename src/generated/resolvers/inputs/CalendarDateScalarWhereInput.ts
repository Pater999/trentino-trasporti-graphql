import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CalendarDateScalarWhereInput", {
  isAbstract: true
})
export class CalendarDateScalarWhereInput {
  @TypeGraphQL.Field(_type => [CalendarDateScalarWhereInput], {
    nullable: true
  })
  AND?: CalendarDateScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CalendarDateScalarWhereInput], {
    nullable: true
  })
  OR?: CalendarDateScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CalendarDateScalarWhereInput], {
    nullable: true
  })
  NOT?: CalendarDateScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  serviceId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  exceptionType?: BoolFilter | undefined;
}
