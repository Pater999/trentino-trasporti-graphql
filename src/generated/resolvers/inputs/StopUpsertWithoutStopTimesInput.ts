import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopCreateWithoutStopTimesInput } from "../inputs/StopCreateWithoutStopTimesInput";
import { StopUpdateWithoutStopTimesInput } from "../inputs/StopUpdateWithoutStopTimesInput";

@TypeGraphQL.InputType("StopUpsertWithoutStopTimesInput", {
  isAbstract: true
})
export class StopUpsertWithoutStopTimesInput {
  @TypeGraphQL.Field(_type => StopUpdateWithoutStopTimesInput, {
    nullable: false
  })
  update!: StopUpdateWithoutStopTimesInput;

  @TypeGraphQL.Field(_type => StopCreateWithoutStopTimesInput, {
    nullable: false
  })
  create!: StopCreateWithoutStopTimesInput;
}
