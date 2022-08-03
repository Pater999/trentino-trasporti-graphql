import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShapeWhereUniqueInput } from "../../../inputs/ShapeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneShapeArgs {
  @TypeGraphQL.Field(_type => ShapeWhereUniqueInput, {
    nullable: false
  })
  where!: ShapeWhereUniqueInput;
}
