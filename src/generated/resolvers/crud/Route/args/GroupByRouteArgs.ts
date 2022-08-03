import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RouteOrderByWithAggregationInput } from "../../../inputs/RouteOrderByWithAggregationInput";
import { RouteScalarWhereWithAggregatesInput } from "../../../inputs/RouteScalarWhereWithAggregatesInput";
import { RouteWhereInput } from "../../../inputs/RouteWhereInput";
import { RouteScalarFieldEnum } from "../../../../enums/RouteScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByRouteArgs {
  @TypeGraphQL.Field(_type => RouteWhereInput, {
    nullable: true
  })
  where?: RouteWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RouteOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: RouteOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [RouteScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"routeId" | "agencyId" | "routeShortName" | "routeLongName" | "routeType" | "routeColor" | "routeTextColor" | "category">;

  @TypeGraphQL.Field(_type => RouteScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: RouteScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
