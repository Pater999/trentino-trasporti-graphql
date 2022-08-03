import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateNestedManyWithoutServiceInput } from "../inputs/TripCreateNestedManyWithoutServiceInput";

@TypeGraphQL.InputType("CalendarCreateWithoutCalendarDatesInput", {
  isAbstract: true
})
export class CalendarCreateWithoutCalendarDatesInput {
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
  startDate?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  endDate?: Date | undefined;

  @TypeGraphQL.Field(_type => TripCreateNestedManyWithoutServiceInput, {
    nullable: true
  })
  trips?: TripCreateNestedManyWithoutServiceInput | undefined;
}
