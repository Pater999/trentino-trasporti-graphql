import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShapeSequenceCreateWithoutShapeInput } from "../inputs/ShapeSequenceCreateWithoutShapeInput";
import { ShapeSequenceUpdateWithoutShapeInput } from "../inputs/ShapeSequenceUpdateWithoutShapeInput";
import { ShapeSequenceWhereUniqueInput } from "../inputs/ShapeSequenceWhereUniqueInput";

@TypeGraphQL.InputType("ShapeSequenceUpsertWithWhereUniqueWithoutShapeInput", {
  isAbstract: true
})
export class ShapeSequenceUpsertWithWhereUniqueWithoutShapeInput {
  @TypeGraphQL.Field(_type => ShapeSequenceWhereUniqueInput, {
    nullable: false
  })
  where!: ShapeSequenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShapeSequenceUpdateWithoutShapeInput, {
    nullable: false
  })
  update!: ShapeSequenceUpdateWithoutShapeInput;

  @TypeGraphQL.Field(_type => ShapeSequenceCreateWithoutShapeInput, {
    nullable: false
  })
  create!: ShapeSequenceCreateWithoutShapeInput;
}
