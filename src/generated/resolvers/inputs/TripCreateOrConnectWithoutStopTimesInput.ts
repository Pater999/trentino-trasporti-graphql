import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateWithoutStopTimesInput } from "../inputs/TripCreateWithoutStopTimesInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripCreateOrConnectWithoutStopTimesInput", {
  isAbstract: true
})
export class TripCreateOrConnectWithoutStopTimesInput {
  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: false
  })
  where!: TripWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripCreateWithoutStopTimesInput, {
    nullable: false
  })
  create!: TripCreateWithoutStopTimesInput;
}
