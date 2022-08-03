import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShapeCreateNestedOneWithoutShapeSequencesInput } from "../inputs/ShapeCreateNestedOneWithoutShapeSequencesInput";

@TypeGraphQL.InputType("ShapeSequenceCreateInput", {
  isAbstract: true
})
export class ShapeSequenceCreateInput {
  @TypeGraphQL.Field(_type => ShapeCreateNestedOneWithoutShapeSequencesInput, {
    nullable: false
  })
  shape!: ShapeCreateNestedOneWithoutShapeSequencesInput;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  shapePtLat!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  shapePtLon!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  shapePtSequence!: number;
}
