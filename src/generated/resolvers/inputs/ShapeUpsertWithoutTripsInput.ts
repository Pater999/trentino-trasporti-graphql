import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShapeCreateWithoutTripsInput } from "../inputs/ShapeCreateWithoutTripsInput";
import { ShapeUpdateWithoutTripsInput } from "../inputs/ShapeUpdateWithoutTripsInput";

@TypeGraphQL.InputType("ShapeUpsertWithoutTripsInput", {
  isAbstract: true
})
export class ShapeUpsertWithoutTripsInput {
  @TypeGraphQL.Field(_type => ShapeUpdateWithoutTripsInput, {
    nullable: false
  })
  update!: ShapeUpdateWithoutTripsInput;

  @TypeGraphQL.Field(_type => ShapeCreateWithoutTripsInput, {
    nullable: false
  })
  create!: ShapeCreateWithoutTripsInput;
}
