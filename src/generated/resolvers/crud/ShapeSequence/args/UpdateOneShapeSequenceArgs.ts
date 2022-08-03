import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShapeSequenceUpdateInput } from "../../../inputs/ShapeSequenceUpdateInput";
import { ShapeSequenceWhereUniqueInput } from "../../../inputs/ShapeSequenceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneShapeSequenceArgs {
  @TypeGraphQL.Field(_type => ShapeSequenceUpdateInput, {
    nullable: false
  })
  data!: ShapeSequenceUpdateInput;

  @TypeGraphQL.Field(_type => ShapeSequenceWhereUniqueInput, {
    nullable: false
  })
  where!: ShapeSequenceWhereUniqueInput;
}
