import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopTimeCreateWithoutTripInput } from "../inputs/StopTimeCreateWithoutTripInput";
import { StopTimeUpdateWithoutTripInput } from "../inputs/StopTimeUpdateWithoutTripInput";
import { StopTimeWhereUniqueInput } from "../inputs/StopTimeWhereUniqueInput";

@TypeGraphQL.InputType("StopTimeUpsertWithWhereUniqueWithoutTripInput", {
  isAbstract: true
})
export class StopTimeUpsertWithWhereUniqueWithoutTripInput {
  @TypeGraphQL.Field(_type => StopTimeWhereUniqueInput, {
    nullable: false
  })
  where!: StopTimeWhereUniqueInput;

  @TypeGraphQL.Field(_type => StopTimeUpdateWithoutTripInput, {
    nullable: false
  })
  update!: StopTimeUpdateWithoutTripInput;

  @TypeGraphQL.Field(_type => StopTimeCreateWithoutTripInput, {
    nullable: false
  })
  create!: StopTimeCreateWithoutTripInput;
}
