import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopCreateOrConnectWithoutStopTimesInput } from "../inputs/StopCreateOrConnectWithoutStopTimesInput";
import { StopCreateWithoutStopTimesInput } from "../inputs/StopCreateWithoutStopTimesInput";
import { StopWhereUniqueInput } from "../inputs/StopWhereUniqueInput";

@TypeGraphQL.InputType("StopCreateNestedOneWithoutStopTimesInput", {
  isAbstract: true
})
export class StopCreateNestedOneWithoutStopTimesInput {
  @TypeGraphQL.Field(_type => StopCreateWithoutStopTimesInput, {
    nullable: true
  })
  create?: StopCreateWithoutStopTimesInput | undefined;

  @TypeGraphQL.Field(_type => StopCreateOrConnectWithoutStopTimesInput, {
    nullable: true
  })
  connectOrCreate?: StopCreateOrConnectWithoutStopTimesInput | undefined;

  @TypeGraphQL.Field(_type => StopWhereUniqueInput, {
    nullable: true
  })
  connect?: StopWhereUniqueInput | undefined;
}
