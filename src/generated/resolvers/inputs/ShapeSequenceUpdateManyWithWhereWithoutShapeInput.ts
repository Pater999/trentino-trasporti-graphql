import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShapeSequenceScalarWhereInput } from "../inputs/ShapeSequenceScalarWhereInput";
import { ShapeSequenceUpdateManyMutationInput } from "../inputs/ShapeSequenceUpdateManyMutationInput";

@TypeGraphQL.InputType("ShapeSequenceUpdateManyWithWhereWithoutShapeInput", {
  isAbstract: true
})
export class ShapeSequenceUpdateManyWithWhereWithoutShapeInput {
  @TypeGraphQL.Field(_type => ShapeSequenceScalarWhereInput, {
    nullable: false
  })
  where!: ShapeSequenceScalarWhereInput;

  @TypeGraphQL.Field(_type => ShapeSequenceUpdateManyMutationInput, {
    nullable: false
  })
  data!: ShapeSequenceUpdateManyMutationInput;
}
