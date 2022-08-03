import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopAvgAggregate } from "../outputs/StopAvgAggregate";
import { StopCountAggregate } from "../outputs/StopCountAggregate";
import { StopMaxAggregate } from "../outputs/StopMaxAggregate";
import { StopMinAggregate } from "../outputs/StopMinAggregate";
import { StopSumAggregate } from "../outputs/StopSumAggregate";
import { RouteCategory } from "../../enums/RouteCategory";
import { WheelchairAccessible } from "../../enums/WheelchairAccessible";

@TypeGraphQL.ObjectType("StopGroupBy", {
  isAbstract: true,
  simpleResolvers: true
})
export class StopGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  stopId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  stopCode!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  stopName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  stopDesc!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  stopLat!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  stopLon!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  zoneId!: number | null;

  @TypeGraphQL.Field(_type => WheelchairAccessible, {
    nullable: false
  })
  wheelchairBoarding!: "NO_INFO" | "YES" | "NO";

  @TypeGraphQL.Field(_type => RouteCategory, {
    nullable: false
  })
  category!: "URBAN" | "SUBURBAN";

  @TypeGraphQL.Field(_type => StopCountAggregate, {
    nullable: true
  })
  _count!: StopCountAggregate | null;

  @TypeGraphQL.Field(_type => StopAvgAggregate, {
    nullable: true
  })
  _avg!: StopAvgAggregate | null;

  @TypeGraphQL.Field(_type => StopSumAggregate, {
    nullable: true
  })
  _sum!: StopSumAggregate | null;

  @TypeGraphQL.Field(_type => StopMinAggregate, {
    nullable: true
  })
  _min!: StopMinAggregate | null;

  @TypeGraphQL.Field(_type => StopMaxAggregate, {
    nullable: true
  })
  _max!: StopMaxAggregate | null;
}
