import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShapeSequenceWhereUniqueInput } from "../../../inputs/ShapeSequenceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueShapeSequenceArgs {
  @TypeGraphQL.Field(_type => ShapeSequenceWhereUniqueInput, {
    nullable: false
  })
  where!: ShapeSequenceWhereUniqueInput;
}
