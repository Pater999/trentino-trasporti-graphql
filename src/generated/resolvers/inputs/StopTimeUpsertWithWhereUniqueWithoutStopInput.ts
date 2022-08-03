import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopTimeCreateWithoutStopInput } from "../inputs/StopTimeCreateWithoutStopInput";
import { StopTimeUpdateWithoutStopInput } from "../inputs/StopTimeUpdateWithoutStopInput";
import { StopTimeWhereUniqueInput } from "../inputs/StopTimeWhereUniqueInput";

@TypeGraphQL.InputType("StopTimeUpsertWithWhereUniqueWithoutStopInput", {
  isAbstract: true
})
export class StopTimeUpsertWithWhereUniqueWithoutStopInput {
  @TypeGraphQL.Field(_type => StopTimeWhereUniqueInput, {
    nullable: false
  })
  where!: StopTimeWhereUniqueInput;

  @TypeGraphQL.Field(_type => StopTimeUpdateWithoutStopInput, {
    nullable: false
  })
  update!: StopTimeUpdateWithoutStopInput;

  @TypeGraphQL.Field(_type => StopTimeCreateWithoutStopInput, {
    nullable: false
  })
  create!: StopTimeCreateWithoutStopInput;
}
