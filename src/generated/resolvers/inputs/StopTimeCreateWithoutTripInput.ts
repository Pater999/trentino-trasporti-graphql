import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopCreateNestedOneWithoutStopTimesInput } from "../inputs/StopCreateNestedOneWithoutStopTimesInput";

@TypeGraphQL.InputType("StopTimeCreateWithoutTripInput", {
  isAbstract: true
})
export class StopTimeCreateWithoutTripInput {
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
