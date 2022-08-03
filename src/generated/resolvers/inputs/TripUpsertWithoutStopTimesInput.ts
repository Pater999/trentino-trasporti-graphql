import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateWithoutStopTimesInput } from "../inputs/TripCreateWithoutStopTimesInput";
import { TripUpdateWithoutStopTimesInput } from "../inputs/TripUpdateWithoutStopTimesInput";

@TypeGraphQL.InputType("TripUpsertWithoutStopTimesInput", {
  isAbstract: true
})
export class TripUpsertWithoutStopTimesInput {
  @TypeGraphQL.Field(_type => TripUpdateWithoutStopTimesInput, {
    nullable: false
  })
  update!: TripUpdateWithoutStopTimesInput;

  @TypeGraphQL.Field(_type => TripCreateWithoutStopTimesInput, {
    nullable: false
  })
  create!: TripCreateWithoutStopTimesInput;
}
