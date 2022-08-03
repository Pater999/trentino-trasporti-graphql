import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShapeSequenceOrderByWithRelationInput } from "../../../inputs/ShapeSequenceOrderByWithRelationInput";
import { ShapeSequenceWhereInput } from "../../../inputs/ShapeSequenceWhereInput";
import { ShapeSequenceWhereUniqueInput } from "../../../inputs/ShapeSequenceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateShapeSequenceArgs {
  @TypeGraphQL.Field(_type => ShapeSequenceWhereInput, {
    nullable: true
  })
  where?: ShapeSequenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ShapeSequenceOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ShapeSequenceOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ShapeSequenceWhereUniqueInput, {
    nullable: true
  })
  cursor?: ShapeSequenceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
