import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RouteAvgAggregate } from "../outputs/RouteAvgAggregate";
import { RouteCountAggregate } from "../outputs/RouteCountAggregate";
import { RouteMaxAggregate } from "../outputs/RouteMaxAggregate";
import { RouteMinAggregate } from "../outputs/RouteMinAggregate";
import { RouteSumAggregate } from "../outputs/RouteSumAggregate";

@TypeGraphQL.ObjectType("AggregateRoute", {
  isAbstract: true,
  simpleResolvers: true
})
export class AggregateRoute {
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
