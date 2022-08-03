import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShapeCreateInput } from "../../../inputs/ShapeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneShapeArgs {
  @TypeGraphQL.Field(_type => ShapeCreateInput, {
    nullable: false
  })
  data!: ShapeCreateInput;
}
