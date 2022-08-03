import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShapeSequenceUpdateWithoutShapeInput } from "../inputs/ShapeSequenceUpdateWithoutShapeInput";
import { ShapeSequenceWhereUniqueInput } from "../inputs/ShapeSequenceWhereUniqueInput";

@TypeGraphQL.InputType("ShapeSequenceUpdateWithWhereUniqueWithoutShapeInput", {
  isAbstract: true
})
export class ShapeSequenceUpdateWithWhereUniqueWithoutShapeInput {
  @TypeGraphQL.Field(_type => ShapeSequenceWhereUniqueInput, {
    nullable: false
  })
  where!: ShapeSequenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShapeSequenceUpdateWithoutShapeInput, {
    nullable: false
  })
  data!: ShapeSequenceUpdateWithoutShapeInput;
}
