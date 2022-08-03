import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShapeOrderByWithAggregationInput } from "../../../inputs/ShapeOrderByWithAggregationInput";
import { ShapeScalarWhereWithAggregatesInput } from "../../../inputs/ShapeScalarWhereWithAggregatesInput";
import { ShapeWhereInput } from "../../../inputs/ShapeWhereInput";
import { ShapeScalarFieldEnum } from "../../../../enums/ShapeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByShapeArgs {
  @TypeGraphQL.Field(_type => ShapeWhereInput, {
    nullable: true
  })
  where?: ShapeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ShapeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ShapeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShapeScalarFieldEnum], {
    nullable: false
  })
  by!: "shapeId"[];

  @TypeGraphQL.Field(_type => ShapeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ShapeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
