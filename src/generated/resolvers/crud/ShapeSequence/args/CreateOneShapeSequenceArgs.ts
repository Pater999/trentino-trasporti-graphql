import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShapeSequenceCreateInput } from "../../../inputs/ShapeSequenceCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneShapeSequenceArgs {
  @TypeGraphQL.Field(_type => ShapeSequenceCreateInput, {
    nullable: false
  })
  data!: ShapeSequenceCreateInput;
}
