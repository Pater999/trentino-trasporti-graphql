import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShapeCreateOrConnectWithoutShapeSequencesInput } from "../inputs/ShapeCreateOrConnectWithoutShapeSequencesInput";
import { ShapeCreateWithoutShapeSequencesInput } from "../inputs/ShapeCreateWithoutShapeSequencesInput";
import { ShapeUpdateWithoutShapeSequencesInput } from "../inputs/ShapeUpdateWithoutShapeSequencesInput";
import { ShapeUpsertWithoutShapeSequencesInput } from "../inputs/ShapeUpsertWithoutShapeSequencesInput";
import { ShapeWhereUniqueInput } from "../inputs/ShapeWhereUniqueInput";

@TypeGraphQL.InputType("ShapeUpdateOneRequiredWithoutShapeSequencesNestedInput", {
  isAbstract: true
})
export class ShapeUpdateOneRequiredWithoutShapeSequencesNestedInput {
  @TypeGraphQL.Field(_type => ShapeCreateWithoutShapeSequencesInput, {
    nullable: true
  })
  create?: ShapeCreateWithoutShapeSequencesInput | undefined;

  @TypeGraphQL.Field(_type => ShapeCreateOrConnectWithoutShapeSequencesInput, {
    nullable: true
  })
  connectOrCreate?: ShapeCreateOrConnectWithoutShapeSequencesInput | undefined;

  @TypeGraphQL.Field(_type => ShapeUpsertWithoutShapeSequencesInput, {
    nullable: true
  })
  upsert?: ShapeUpsertWithoutShapeSequencesInput | undefined;

  @TypeGraphQL.Field(_type => ShapeWhereUniqueInput, {
    nullable: true
  })
  connect?: ShapeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ShapeUpdateWithoutShapeSequencesInput, {
    nullable: true
  })
  update?: ShapeUpdateWithoutShapeSequencesInput | undefined;
}
