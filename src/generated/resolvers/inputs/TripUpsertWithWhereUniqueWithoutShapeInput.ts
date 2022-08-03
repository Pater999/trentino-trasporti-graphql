import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateWithoutShapeInput } from "../inputs/TripCreateWithoutShapeInput";
import { TripUpdateWithoutShapeInput } from "../inputs/TripUpdateWithoutShapeInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripUpsertWithWhereUniqueWithoutShapeInput", {
  isAbstract: true
})
export class TripUpsertWithWhereUniqueWithoutShapeInput {
  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: false
  })
  where!: TripWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripUpdateWithoutShapeInput, {
    nullable: false
  })
  update!: TripUpdateWithoutShapeInput;

  @TypeGraphQL.Field(_type => TripCreateWithoutShapeInput, {
    nullable: false
  })
  create!: TripCreateWithoutShapeInput;
}
