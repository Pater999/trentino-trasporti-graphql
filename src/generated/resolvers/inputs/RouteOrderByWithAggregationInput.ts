import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RouteAvgOrderByAggregateInput } from "../inputs/RouteAvgOrderByAggregateInput";
import { RouteCountOrderByAggregateInput } from "../inputs/RouteCountOrderByAggregateInput";
import { RouteMaxOrderByAggregateInput } from "../inputs/RouteMaxOrderByAggregateInput";
import { RouteMinOrderByAggregateInput } from "../inputs/RouteMinOrderByAggregateInput";
import { RouteSumOrderByAggregateInput } from "../inputs/RouteSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RouteOrderByWithAggregationInput", {
  isAbstract: true
})
export class RouteOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  routeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  agencyId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  routeShortName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  routeLongName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  routeType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  routeColor?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  routeTextColor?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => RouteCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: RouteCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RouteAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: RouteAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RouteMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: RouteMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RouteMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: RouteMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RouteSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: RouteSumOrderByAggregateInput | undefined;
}
