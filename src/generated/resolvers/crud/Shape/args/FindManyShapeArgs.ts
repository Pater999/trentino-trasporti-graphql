import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShapeOrderByWithRelationInput } from "../../../inputs/ShapeOrderByWithRelationInput";
import { ShapeWhereInput } from "../../../inputs/ShapeWhereInput";
import { ShapeWhereUniqueInput } from "../../../inputs/ShapeWhereUniqueInput";
import { ShapeScalarFieldEnum } from "../../../../enums/ShapeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyShapeArgs {
  @TypeGraphQL.Field(_type => ShapeWhereInput, {
    nullable: true
  })
  where?: ShapeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ShapeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ShapeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ShapeWhereUniqueInput, {
    nullable: true
  })
  cursor?: ShapeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ShapeScalarFieldEnum], {
    nullable: true
  })
  distinct?: "shapeId"[] | undefined;
}
