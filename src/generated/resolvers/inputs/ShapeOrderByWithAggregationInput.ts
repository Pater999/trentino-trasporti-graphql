import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShapeCountOrderByAggregateInput } from "../inputs/ShapeCountOrderByAggregateInput";
import { ShapeMaxOrderByAggregateInput } from "../inputs/ShapeMaxOrderByAggregateInput";
import { ShapeMinOrderByAggregateInput } from "../inputs/ShapeMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ShapeOrderByWithAggregationInput", {
  isAbstract: true
})
export class ShapeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shapeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ShapeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ShapeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShapeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ShapeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShapeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ShapeMinOrderByAggregateInput | undefined;
}
