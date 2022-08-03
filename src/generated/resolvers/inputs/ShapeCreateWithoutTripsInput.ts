import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShapeSequenceCreateNestedManyWithoutShapeInput } from "../inputs/ShapeSequenceCreateNestedManyWithoutShapeInput";

@TypeGraphQL.InputType("ShapeCreateWithoutTripsInput", {
  isAbstract: true
})
export class ShapeCreateWithoutTripsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shapeId!: string;

  @TypeGraphQL.Field(_type => ShapeSequenceCreateNestedManyWithoutShapeInput, {
    nullable: true
  })
  shapeSequences?: ShapeSequenceCreateNestedManyWithoutShapeInput | undefined;
}
