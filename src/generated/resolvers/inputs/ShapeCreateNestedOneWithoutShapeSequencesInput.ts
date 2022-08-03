import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShapeCreateOrConnectWithoutShapeSequencesInput } from "../inputs/ShapeCreateOrConnectWithoutShapeSequencesInput";
import { ShapeCreateWithoutShapeSequencesInput } from "../inputs/ShapeCreateWithoutShapeSequencesInput";
import { ShapeWhereUniqueInput } from "../inputs/ShapeWhereUniqueInput";

@TypeGraphQL.InputType("ShapeCreateNestedOneWithoutShapeSequencesInput", {
  isAbstract: true
})
export class ShapeCreateNestedOneWithoutShapeSequencesInput {
  @TypeGraphQL.Field(_type => ShapeCreateWithoutShapeSequencesInput, {
    nullable: true
  })
  create?: ShapeCreateWithoutShapeSequencesInput | undefined;

  @TypeGraphQL.Field(_type => ShapeCreateOrConnectWithoutShapeSequencesInput, {
    nullable: true
  })
  connectOrCreate?: ShapeCreateOrConnectWithoutShapeSequencesInput | undefined;

  @TypeGraphQL.Field(_type => ShapeWhereUniqueInput, {
    nullable: true
  })
  connect?: ShapeWhereUniqueInput | undefined;
}
