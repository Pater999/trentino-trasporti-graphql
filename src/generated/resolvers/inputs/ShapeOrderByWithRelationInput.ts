import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShapeSequenceOrderByRelationAggregateInput } from "../inputs/ShapeSequenceOrderByRelationAggregateInput";
import { TripOrderByRelationAggregateInput } from "../inputs/TripOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ShapeOrderByWithRelationInput", {
  isAbstract: true
})
export class ShapeOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shapeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TripOrderByRelationAggregateInput, {
    nullable: true
  })
  trips?: TripOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShapeSequenceOrderByRelationAggregateInput, {
    nullable: true
  })
  shapeSequences?: ShapeSequenceOrderByRelationAggregateInput | undefined;
}
