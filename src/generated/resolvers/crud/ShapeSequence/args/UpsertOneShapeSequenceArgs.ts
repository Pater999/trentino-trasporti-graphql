import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShapeSequenceCreateInput } from "../../../inputs/ShapeSequenceCreateInput";
import { ShapeSequenceUpdateInput } from "../../../inputs/ShapeSequenceUpdateInput";
import { ShapeSequenceWhereUniqueInput } from "../../../inputs/ShapeSequenceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneShapeSequenceArgs {
  @TypeGraphQL.Field(_type => ShapeSequenceWhereUniqueInput, {
    nullable: false
  })
  where!: ShapeSequenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShapeSequenceCreateInput, {
    nullable: false
  })
  create!: ShapeSequenceCreateInput;

  @TypeGraphQL.Field(_type => ShapeSequenceUpdateInput, {
    nullable: false
  })
  update!: ShapeSequenceUpdateInput;
}
