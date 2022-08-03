import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { CalendarRelationFilter } from "../inputs/CalendarRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CalendarDateWhereInput", {
  isAbstract: true
})
export class CalendarDateWhereInput {
  @TypeGraphQL.Field(_type => [CalendarDateWhereInput], {
    nullable: true
  })
  AND?: CalendarDateWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CalendarDateWhereInput], {
    nullable: true
  })
  OR?: CalendarDateWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CalendarDateWhereInput], {
    nullable: true
  })
  NOT?: CalendarDateWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  serviceId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => CalendarRelationFilter, {
    nullable: true
  })
  service?: CalendarRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  exceptionType?: BoolFilter | undefined;
}
