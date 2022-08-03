import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShapeSequenceCreateNestedManyWithoutShapeInput } from "../inputs/ShapeSequenceCreateNestedManyWithoutShapeInput";
import { TripCreateNestedManyWithoutShapeInput } from "../inputs/TripCreateNestedManyWithoutShapeInput";

@TypeGraphQL.InputType("ShapeCreateInput", {
  isAbstract: true
})
export class ShapeCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shapeId!: string;

  @TypeGraphQL.Field(_type => TripCreateNestedManyWithoutShapeInput, {
    nullable: true
  })
  trips?: TripCreateNestedManyWithoutShapeInput | undefined;

  @TypeGraphQL.Field(_type => ShapeSequenceCreateNestedManyWithoutShapeInput, {
    nullable: true
  })
  shapeSequences?: ShapeSequenceCreateNestedManyWithoutShapeInput | undefined;
}
