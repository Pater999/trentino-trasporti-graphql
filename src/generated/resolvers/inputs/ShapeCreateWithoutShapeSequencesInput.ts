import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateNestedManyWithoutShapeInput } from "../inputs/TripCreateNestedManyWithoutShapeInput";

@TypeGraphQL.InputType("ShapeCreateWithoutShapeSequencesInput", {
  isAbstract: true
})
export class ShapeCreateWithoutShapeSequencesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shapeId!: string;

  @TypeGraphQL.Field(_type => TripCreateNestedManyWithoutShapeInput, {
    nullable: true
  })
  trips?: TripCreateNestedManyWithoutShapeInput | undefined;
}
