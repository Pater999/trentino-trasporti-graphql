import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopTimeUpdateWithoutStopInput } from "../inputs/StopTimeUpdateWithoutStopInput";
import { StopTimeWhereUniqueInput } from "../inputs/StopTimeWhereUniqueInput";

@TypeGraphQL.InputType("StopTimeUpdateWithWhereUniqueWithoutStopInput", {
  isAbstract: true
})
export class StopTimeUpdateWithWhereUniqueWithoutStopInput {
  @TypeGraphQL.Field(_type => StopTimeWhereUniqueInput, {
    nullable: false
  })
  where!: StopTimeWhereUniqueInput;

  @TypeGraphQL.Field(_type => StopTimeUpdateWithoutStopInput, {
    nullable: false
  })
  data!: StopTimeUpdateWithoutStopInput;
}
