import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShapeWhereInput } from "../../../inputs/ShapeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyShapeArgs {
  @TypeGraphQL.Field(_type => ShapeWhereInput, {
    nullable: true
  })
  where?: ShapeWhereInput | undefined;
}
