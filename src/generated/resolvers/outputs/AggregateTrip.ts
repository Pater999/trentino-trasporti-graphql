import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCountAggregate } from "../outputs/TripCountAggregate";
import { TripMaxAggregate } from "../outputs/TripMaxAggregate";
import { TripMinAggregate } from "../outputs/TripMinAggregate";

@TypeGraphQL.ObjectType("AggregateTrip", {
  isAbstract: true,
  simpleResolvers: true
})
export class AggregateTrip {
  @TypeGraphQL.Field(_type => TripCountAggregate, {
    nullable: true
  })
  _count!: TripCountAggregate | null;

  @TypeGraphQL.Field(_type => TripMinAggregate, {
    nullable: true
  })
  _min!: TripMinAggregate | null;

  @TypeGraphQL.Field(_type => TripMaxAggregate, {
    nullable: true
  })
  _max!: TripMaxAggregate | null;
}
