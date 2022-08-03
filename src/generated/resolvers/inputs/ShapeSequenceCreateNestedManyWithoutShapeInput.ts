import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShapeSequenceCreateManyShapeInputEnvelope } from "../inputs/ShapeSequenceCreateManyShapeInputEnvelope";
import { ShapeSequenceCreateOrConnectWithoutShapeInput } from "../inputs/ShapeSequenceCreateOrConnectWithoutShapeInput";
import { ShapeSequenceCreateWithoutShapeInput } from "../inputs/ShapeSequenceCreateWithoutShapeInput";
import { ShapeSequenceWhereUniqueInput } from "../inputs/ShapeSequenceWhereUniqueInput";

@TypeGraphQL.InputType("ShapeSequenceCreateNestedManyWithoutShapeInput", {
  isAbstract: true
})
export class ShapeSequenceCreateNestedManyWithoutShapeInput {
  @TypeGraphQL.Field(_type => [ShapeSequenceCreateWithoutShapeInput], {
    nullable: true
  })
  create?: ShapeSequenceCreateWithoutShapeInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShapeSequenceCreateOrConnectWithoutShapeInput], {
    nullable: true
  })
  connectOrCreate?: ShapeSequenceCreateOrConnectWithoutShapeInput[] | undefined;

  @TypeGraphQL.Field(_type => ShapeSequenceCreateManyShapeInputEnvelope, {
    nullable: true
  })
  createMany?: ShapeSequenceCreateManyShapeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ShapeSequenceWhereUniqueInput], {
    nullable: true
  })
  connect?: ShapeSequenceWhereUniqueInput[] | undefined;
}
