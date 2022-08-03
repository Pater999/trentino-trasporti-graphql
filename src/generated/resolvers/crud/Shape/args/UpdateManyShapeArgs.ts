import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShapeUpdateManyMutationInput } from "../../../inputs/ShapeUpdateManyMutationInput";
import { ShapeWhereInput } from "../../../inputs/ShapeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyShapeArgs {
  @TypeGraphQL.Field(_type => ShapeUpdateManyMutationInput, {
    nullable: false
  })
  data!: ShapeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ShapeWhereInput, {
    nullable: true
  })
  where?: ShapeWhereInput | undefined;
}
