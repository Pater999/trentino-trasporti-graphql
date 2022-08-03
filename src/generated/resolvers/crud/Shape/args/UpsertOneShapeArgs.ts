import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShapeCreateInput } from "../../../inputs/ShapeCreateInput";
import { ShapeUpdateInput } from "../../../inputs/ShapeUpdateInput";
import { ShapeWhereUniqueInput } from "../../../inputs/ShapeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneShapeArgs {
  @TypeGraphQL.Field(_type => ShapeWhereUniqueInput, {
    nullable: false
  })
  where!: ShapeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShapeCreateInput, {
    nullable: false
  })
  create!: ShapeCreateInput;

  @TypeGraphQL.Field(_type => ShapeUpdateInput, {
    nullable: false
  })
  update!: ShapeUpdateInput;
}
