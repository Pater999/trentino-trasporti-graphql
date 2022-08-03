import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateOrConnectWithoutStopTimesInput } from "../inputs/TripCreateOrConnectWithoutStopTimesInput";
import { TripCreateWithoutStopTimesInput } from "../inputs/TripCreateWithoutStopTimesInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripCreateNestedOneWithoutStopTimesInput", {
  isAbstract: true
})
export class TripCreateNestedOneWithoutStopTimesInput {
  @TypeGraphQL.Field(_type => TripCreateWithoutStopTimesInput, {
    nullable: true
  })
  create?: TripCreateWithoutStopTimesInput | undefined;

  @TypeGraphQL.Field(_type => TripCreateOrConnectWithoutStopTimesInput, {
    nullable: true
  })
  connectOrCreate?: TripCreateOrConnectWithoutStopTimesInput | undefined;

  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: true
  })
  connect?: TripWhereUniqueInput | undefined;
}
