import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShapeSequenceCreateManyShapeInputEnvelope } from "../inputs/ShapeSequenceCreateManyShapeInputEnvelope";
import { ShapeSequenceCreateOrConnectWithoutShapeInput } from "../inputs/ShapeSequenceCreateOrConnectWithoutShapeInput";
import { ShapeSequenceCreateWithoutShapeInput } from "../inputs/ShapeSequenceCreateWithoutShapeInput";
import { ShapeSequenceScalarWhereInput } from "../inputs/ShapeSequenceScalarWhereInput";
import { ShapeSequenceUpdateManyWithWhereWithoutShapeInput } from "../inputs/ShapeSequenceUpdateManyWithWhereWithoutShapeInput";
import { ShapeSequenceUpdateWithWhereUniqueWithoutShapeInput } from "../inputs/ShapeSequenceUpdateWithWhereUniqueWithoutShapeInput";
import { ShapeSequenceUpsertWithWhereUniqueWithoutShapeInput } from "../inputs/ShapeSequenceUpsertWithWhereUniqueWithoutShapeInput";
import { ShapeSequenceWhereUniqueInput } from "../inputs/ShapeSequenceWhereUniqueInput";

@TypeGraphQL.InputType("ShapeSequenceUpdateManyWithoutShapeNestedInput", {
  isAbstract: true
})
export class ShapeSequenceUpdateManyWithoutShapeNestedInput {
  @TypeGraphQL.Field(_type => [ShapeSequenceCreateWithoutShapeInput], {
    nullable: true
  })
  create?: ShapeSequenceCreateWithoutShapeInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShapeSequenceCreateOrConnectWithoutShapeInput], {
    nullable: true
  })
  connectOrCreate?: ShapeSequenceCreateOrConnectWithoutShapeInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShapeSequenceUpsertWithWhereUniqueWithoutShapeInput], {
    nullable: true
  })
  upsert?: ShapeSequenceUpsertWithWhereUniqueWithoutShapeInput[] | undefined;

  @TypeGraphQL.Field(_type => ShapeSequenceCreateManyShapeInputEnvelope, {
    nullable: true
  })
  createMany?: ShapeSequenceCreateManyShapeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ShapeSequenceWhereUniqueInput], {
    nullable: true
  })
  set?: ShapeSequenceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShapeSequenceWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ShapeSequenceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShapeSequenceWhereUniqueInput], {
    nullable: true
  })
  delete?: ShapeSequenceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShapeSequenceWhereUniqueInput], {
    nullable: true
  })
  connect?: ShapeSequenceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShapeSequenceUpdateWithWhereUniqueWithoutShapeInput], {
    nullable: true
  })
  update?: ShapeSequenceUpdateWithWhereUniqueWithoutShapeInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShapeSequenceUpdateManyWithWhereWithoutShapeInput], {
    nullable: true
  })
  updateMany?: ShapeSequenceUpdateManyWithWhereWithoutShapeInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShapeSequenceScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ShapeSequenceScalarWhereInput[] | undefined;
}
