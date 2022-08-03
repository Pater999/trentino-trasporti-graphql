import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopCreateNestedOneWithoutStopTimesInput } from "../inputs/StopCreateNestedOneWithoutStopTimesInput";
import { TripCreateNestedOneWithoutStopTimesInput } from "../inputs/TripCreateNestedOneWithoutStopTimesInput";

@TypeGraphQL.InputType("StopTimeCreateInput", {
  isAbstract: true
})
export class StopTimeCreateInput {
  @TypeGraphQL.Field(_type => TripCreateNestedOneWithoutStopTimesInput, {
    nullable: false
  })
  trip!: TripCreateNestedOneWithoutStopTimesInput;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  arrivalTime!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  departureTime!: string;

  @TypeGraphQL.Field(_type => StopCreateNestedOneWithoutStopTimesInput, {
    nullable: false
  })
  stop!: StopCreateNestedOneWithoutStopTimesInput;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  stopSequence!: number;
}
