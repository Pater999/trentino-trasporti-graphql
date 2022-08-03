import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopTimeAvgAggregate } from "../outputs/StopTimeAvgAggregate";
import { StopTimeCountAggregate } from "../outputs/StopTimeCountAggregate";
import { StopTimeMaxAggregate } from "../outputs/StopTimeMaxAggregate";
import { StopTimeMinAggregate } from "../outputs/StopTimeMinAggregate";
import { StopTimeSumAggregate } from "../outputs/StopTimeSumAggregate";

@TypeGraphQL.ObjectType("StopTimeGroupBy", {
  isAbstract: true,
  simpleResolvers: true
})
export class StopTimeGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tripId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  arrivalTime!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  departureTime!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  stopId!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  stopSequence!: number;

  @TypeGraphQL.Field(_type => StopTimeCountAggregate, {
    nullable: true
  })
  _count!: StopTimeCountAggregate | null;

  @TypeGraphQL.Field(_type => StopTimeAvgAggregate, {
    nullable: true
  })
  _avg!: StopTimeAvgAggregate | null;

  @TypeGraphQL.Field(_type => StopTimeSumAggregate, {
    nullable: true
  })
  _sum!: StopTimeSumAggregate | null;

  @TypeGraphQL.Field(_type => StopTimeMinAggregate, {
    nullable: true
  })
  _min!: StopTimeMinAggregate | null;

  @TypeGraphQL.Field(_type => StopTimeMaxAggregate, {
    nullable: true
  })
  _max!: StopTimeMaxAggregate | null;
}
