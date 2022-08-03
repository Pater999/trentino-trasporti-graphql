import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CalendarCountAggregate } from "../outputs/CalendarCountAggregate";
import { CalendarMaxAggregate } from "../outputs/CalendarMaxAggregate";
import { CalendarMinAggregate } from "../outputs/CalendarMinAggregate";

@TypeGraphQL.ObjectType("AggregateCalendar", {
  isAbstract: true,
  simpleResolvers: true
})
export class AggregateCalendar {
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
