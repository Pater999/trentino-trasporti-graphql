import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShapeCreateWithoutTripsInput } from "../inputs/ShapeCreateWithoutTripsInput";
import { ShapeWhereUniqueInput } from "../inputs/ShapeWhereUniqueInput";

@TypeGraphQL.InputType("ShapeCreateOrConnectWithoutTripsInput", {
  isAbstract: true
})
export class ShapeCreateOrConnectWithoutTripsInput {
  @TypeGraphQL.Field(_type => ShapeWhereUniqueInput, {
    nullable: false
  })
  where!: ShapeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShapeCreateWithoutTripsInput, {
    nullable: false
  })
  create!: ShapeCreateWithoutTripsInput;
}
