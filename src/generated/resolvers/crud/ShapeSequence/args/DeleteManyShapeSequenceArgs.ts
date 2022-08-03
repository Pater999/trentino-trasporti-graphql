import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShapeSequenceWhereInput } from "../../../inputs/ShapeSequenceWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyShapeSequenceArgs {
  @TypeGraphQL.Field(_type => ShapeSequenceWhereInput, {
    nullable: true
  })
  where?: ShapeSequenceWhereInput | undefined;
}
