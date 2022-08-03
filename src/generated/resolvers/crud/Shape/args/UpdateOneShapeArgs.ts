import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShapeUpdateInput } from "../../../inputs/ShapeUpdateInput";
import { ShapeWhereUniqueInput } from "../../../inputs/ShapeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneShapeArgs {
  @TypeGraphQL.Field(_type => ShapeUpdateInput, {
    nullable: false
  })
  data!: ShapeUpdateInput;

  @TypeGraphQL.Field(_type => ShapeWhereUniqueInput, {
    nullable: false
  })
  where!: ShapeWhereUniqueInput;
}
