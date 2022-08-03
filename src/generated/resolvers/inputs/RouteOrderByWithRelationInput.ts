import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AgencyOrderByWithRelationInput } from "../inputs/AgencyOrderByWithRelationInput";
import { TripOrderByRelationAggregateInput } from "../inputs/TripOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RouteOrderByWithRelationInput", {
  isAbstract: true
})
export class RouteOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  routeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  agencyId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AgencyOrderByWithRelationInput, {
    nullable: true
  })
  agency?: AgencyOrderByWithRelationInput | undefined;

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

  @TypeGraphQL.Field(_type => TripOrderByRelationAggregateInput, {
    nullable: true
  })
  trips?: TripOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category?: "asc" | "desc" | undefined;
}
