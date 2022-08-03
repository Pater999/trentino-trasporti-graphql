import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CalendarCountAggregate } from "../outputs/CalendarCountAggregate";
import { CalendarMaxAggregate } from "../outputs/CalendarMaxAggregate";
import { CalendarMinAggregate } from "../outputs/CalendarMinAggregate";

@TypeGraphQL.ObjectType("CalendarGroupBy", {
  isAbstract: true,
  simpleResolvers: true
})
export class CalendarGroupBy {
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
  startDate!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  endDate!: Date | null;

  @TypeGraphQL.Field(_type => CalendarCountAggregate, {
    nullable: true
  })
  _count!: CalendarCountAggregate | null;

  @TypeGraphQL.Field(_type => CalendarMinAggregate, {
    nullable: true
  })
  _min!: CalendarMinAggregate | null;

  @TypeGraphQL.Field(_type => CalendarMaxAggregate, {
    nullable: true
  })
  _max!: CalendarMaxAggregate | null;
}
