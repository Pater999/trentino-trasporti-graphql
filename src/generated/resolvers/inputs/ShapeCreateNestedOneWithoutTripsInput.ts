import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShapeCreateOrConnectWithoutTripsInput } from "../inputs/ShapeCreateOrConnectWithoutTripsInput";
import { ShapeCreateWithoutTripsInput } from "../inputs/ShapeCreateWithoutTripsInput";
import { ShapeWhereUniqueInput } from "../inputs/ShapeWhereUniqueInput";

@TypeGraphQL.InputType("ShapeCreateNestedOneWithoutTripsInput", {
  isAbstract: true
})
export class ShapeCreateNestedOneWithoutTripsInput {
  @TypeGraphQL.Field(_type => ShapeCreateWithoutTripsInput, {
    nullable: true
  })
  create?: ShapeCreateWithoutTripsInput | undefined;

  @TypeGraphQL.Field(_type => ShapeCreateOrConnectWithoutTripsInput, {
    nullable: true
  })
  connectOrCreate?: ShapeCreateOrConnectWithoutTripsInput | undefined;

  @TypeGraphQL.Field(_type => ShapeWhereUniqueInput, {
    nullable: true
  })
  connect?: ShapeWhereUniqueInput | undefined;
}
