import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShapeSequenceOrderByWithAggregationInput } from "../../../inputs/ShapeSequenceOrderByWithAggregationInput";
import { ShapeSequenceScalarWhereWithAggregatesInput } from "../../../inputs/ShapeSequenceScalarWhereWithAggregatesInput";
import { ShapeSequenceWhereInput } from "../../../inputs/ShapeSequenceWhereInput";
import { ShapeSequenceScalarFieldEnum } from "../../../../enums/ShapeSequenceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByShapeSequenceArgs {
  @TypeGraphQL.Field(_type => ShapeSequenceWhereInput, {
    nullable: true
  })
  where?: ShapeSequenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ShapeSequenceOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ShapeSequenceOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShapeSequenceScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"shapeId" | "shapePtLat" | "shapePtLon" | "shapePtSequence">;

  @TypeGraphQL.Field(_type => ShapeSequenceScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ShapeSequenceScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
