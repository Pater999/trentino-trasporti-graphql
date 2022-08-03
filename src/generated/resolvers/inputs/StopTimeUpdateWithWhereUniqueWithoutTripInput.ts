import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopTimeUpdateWithoutTripInput } from "../inputs/StopTimeUpdateWithoutTripInput";
import { StopTimeWhereUniqueInput } from "../inputs/StopTimeWhereUniqueInput";

@TypeGraphQL.InputType("StopTimeUpdateWithWhereUniqueWithoutTripInput", {
  isAbstract: true
})
export class StopTimeUpdateWithWhereUniqueWithoutTripInput {
  @TypeGraphQL.Field(_type => StopTimeWhereUniqueInput, {
    nullable: false
  })
  where!: StopTimeWhereUniqueInput;

  @TypeGraphQL.Field(_type => StopTimeUpdateWithoutTripInput, {
    nullable: false
  })
  data!: StopTimeUpdateWithoutTripInput;
}
