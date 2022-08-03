import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CalendarDate } from "../models/CalendarDate";
import { Trip } from "../models/Trip";
import { CalendarCount } from "../resolvers/outputs/CalendarCount";

@TypeGraphQL.ObjectType("Calendar", {
  isAbstract: true,
  simpleResolvers: true
})
export class Calendar {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  serviceId!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  monday!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  tuesday!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  wednesday!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  thursday!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  friday!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  saturday!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  sunday!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  startDate?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  endDate?: Date | null;

  calendarDates?: CalendarDate[];

  trips?: Trip[];

  @TypeGraphQL.Field(_type => CalendarCount, {
    nullable: true
  })
  _count?: CalendarCount | null;
}
