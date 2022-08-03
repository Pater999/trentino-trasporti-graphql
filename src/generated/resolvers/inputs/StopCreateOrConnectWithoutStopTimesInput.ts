import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopCreateWithoutStopTimesInput } from "../inputs/StopCreateWithoutStopTimesInput";
import { StopWhereUniqueInput } from "../inputs/StopWhereUniqueInput";

@TypeGraphQL.InputType("StopCreateOrConnectWithoutStopTimesInput", {
  isAbstract: true
})
export class StopCreateOrConnectWithoutStopTimesInput {
  @TypeGraphQL.Field(_type => StopWhereUniqueInput, {
    nullable: false
  })
  where!: StopWhereUniqueInput;

  @TypeGraphQL.Field(_type => StopCreateWithoutStopTimesInput, {
    nullable: false
  })
  create!: StopCreateWithoutStopTimesInput;
}
