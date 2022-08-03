import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CalendarDateCountAggregate } from "../outputs/CalendarDateCountAggregate";
import { CalendarDateMaxAggregate } from "../outputs/CalendarDateMaxAggregate";
import { CalendarDateMinAggregate } from "../outputs/CalendarDateMinAggregate";

@TypeGraphQL.ObjectType("AggregateCalendarDate", {
  isAbstract: true,
  simpleResolvers: true
})
export class AggregateCalendarDate {
  @TypeGraphQL.Field(_type => CalendarDateCountAggregate, {
    nullable: true
  })
  _count!: CalendarDateCountAggregate | null;

  @TypeGraphQL.Field(_type => CalendarDateMinAggregate, {
    nullable: true
  })
  _min!: CalendarDateMinAggregate | null;

  @TypeGraphQL.Field(_type => CalendarDateMaxAggregate, {
    nullable: true
  })
  _max!: CalendarDateMaxAggregate | null;
}
