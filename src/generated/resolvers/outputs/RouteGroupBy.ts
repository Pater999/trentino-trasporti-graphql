import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RouteAvgAggregate } from "../outputs/RouteAvgAggregate";
import { RouteCountAggregate } from "../outputs/RouteCountAggregate";
import { RouteMaxAggregate } from "../outputs/RouteMaxAggregate";
import { RouteMinAggregate } from "../outputs/RouteMinAggregate";
import { RouteSumAggregate } from "../outputs/RouteSumAggregate";
import { RouteCategory } from "../../enums/RouteCategory";
import { RouteType } from "../../enums/RouteType";

@TypeGraphQL.ObjectType("RouteGroupBy", {
  isAbstract: true,
  simpleResolvers: true
})
export class RouteGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  routeId!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  agencyId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  routeShortName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  routeLongName!: string;

  @TypeGraphQL.Field(_type => RouteType, {
    nullable: false
  })
  routeType!: "TRAM" | "SUBWAY" | "TRAIN" | "BUS" | "FERRY" | "CABLE_CAR" | "GONDOLA" | "ROPE_WAY";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  routeColor!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  routeTextColor!: string | null;

  @TypeGraphQL.Field(_type => RouteCategory, {
    nullable: false
  })
  category!: "URBAN" | "SUBURBAN";

  @TypeGraphQL.Field(_type => RouteCountAggregate, {
    nullable: true
  })
  _count!: RouteCountAggregate | null;

  @TypeGraphQL.Field(_type => RouteAvgAggregate, {
    nullable: true
  })
  _avg!: RouteAvgAggregate | null;

  @TypeGraphQL.Field(_type => RouteSumAggregate, {
    nullable: true
  })
  _sum!: RouteSumAggregate | null;

  @TypeGraphQL.Field(_type => RouteMinAggregate, {
    nullable: true
  })
  _min!: RouteMinAggregate | null;

  @TypeGraphQL.Field(_type => RouteMaxAggregate, {
    nullable: true
  })
  _max!: RouteMaxAggregate | null;
}
