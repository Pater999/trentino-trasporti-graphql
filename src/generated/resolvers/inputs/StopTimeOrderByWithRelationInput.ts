import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopOrderByWithRelationInput } from "../inputs/StopOrderByWithRelationInput";
import { TripOrderByWithRelationInput } from "../inputs/TripOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StopTimeOrderByWithRelationInput", {
  isAbstract: true
})
export class StopTimeOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tripId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TripOrderByWithRelationInput, {
    nullable: true
  })
  trip?: TripOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  arrivalTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  departureTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  stopId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => StopOrderByWithRelationInput, {
    nullable: true
  })
  stop?: StopOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  stopSequence?: "asc" | "desc" | undefined;
}
