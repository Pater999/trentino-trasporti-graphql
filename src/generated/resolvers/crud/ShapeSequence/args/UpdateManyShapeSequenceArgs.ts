import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShapeSequenceUpdateManyMutationInput } from "../../../inputs/ShapeSequenceUpdateManyMutationInput";
import { ShapeSequenceWhereInput } from "../../../inputs/ShapeSequenceWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyShapeSequenceArgs {
  @TypeGraphQL.Field(_type => ShapeSequenceUpdateManyMutationInput, {
    nullable: false
  })
  data!: ShapeSequenceUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ShapeSequenceWhereInput, {
    nullable: true
  })
  where?: ShapeSequenceWhereInput | undefined;
}
