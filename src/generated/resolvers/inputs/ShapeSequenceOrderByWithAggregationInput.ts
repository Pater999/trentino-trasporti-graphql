import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShapeSequenceAvgOrderByAggregateInput } from "../inputs/ShapeSequenceAvgOrderByAggregateInput";
import { ShapeSequenceCountOrderByAggregateInput } from "../inputs/ShapeSequenceCountOrderByAggregateInput";
import { ShapeSequenceMaxOrderByAggregateInput } from "../inputs/ShapeSequenceMaxOrderByAggregateInput";
import { ShapeSequenceMinOrderByAggregateInput } from "../inputs/ShapeSequenceMinOrderByAggregateInput";
import { ShapeSequenceSumOrderByAggregateInput } from "../inputs/ShapeSequenceSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ShapeSequenceOrderByWithAggregationInput", {
  isAbstract: true
})
export class ShapeSequenceOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shapeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shapePtLat?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shapePtLon?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shapePtSequence?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ShapeSequenceCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ShapeSequenceCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShapeSequenceAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ShapeSequenceAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShapeSequenceMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ShapeSequenceMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShapeSequenceMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ShapeSequenceMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShapeSequenceSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ShapeSequenceSumOrderByAggregateInput | undefined;
}
