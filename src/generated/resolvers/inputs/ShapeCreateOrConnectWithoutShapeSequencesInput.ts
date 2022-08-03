import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShapeCreateWithoutShapeSequencesInput } from "../inputs/ShapeCreateWithoutShapeSequencesInput";
import { ShapeWhereUniqueInput } from "../inputs/ShapeWhereUniqueInput";

@TypeGraphQL.InputType("ShapeCreateOrConnectWithoutShapeSequencesInput", {
  isAbstract: true
})
export class ShapeCreateOrConnectWithoutShapeSequencesInput {
  @TypeGraphQL.Field(_type => ShapeWhereUniqueInput, {
    nullable: false
  })
  where!: ShapeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShapeCreateWithoutShapeSequencesInput, {
    nullable: false
  })
  create!: ShapeCreateWithoutShapeSequencesInput;
}
