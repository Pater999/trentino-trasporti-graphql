import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShapeSequenceCreateWithoutShapeInput } from "../inputs/ShapeSequenceCreateWithoutShapeInput";
import { ShapeSequenceWhereUniqueInput } from "../inputs/ShapeSequenceWhereUniqueInput";

@TypeGraphQL.InputType("ShapeSequenceCreateOrConnectWithoutShapeInput", {
  isAbstract: true
})
export class ShapeSequenceCreateOrConnectWithoutShapeInput {
  @TypeGraphQL.Field(_type => ShapeSequenceWhereUniqueInput, {
    nullable: false
  })
  where!: ShapeSequenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShapeSequenceCreateWithoutShapeInput, {
    nullable: false
  })
  create!: ShapeSequenceCreateWithoutShapeInput;
}
