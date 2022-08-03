import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopTimeCreateWithoutTripInput } from "../inputs/StopTimeCreateWithoutTripInput";
import { StopTimeWhereUniqueInput } from "../inputs/StopTimeWhereUniqueInput";

@TypeGraphQL.InputType("StopTimeCreateOrConnectWithoutTripInput", {
  isAbstract: true
})
export class StopTimeCreateOrConnectWithoutTripInput {
  @TypeGraphQL.Field(_type => StopTimeWhereUniqueInput, {
    nullable: false
  })
  where!: StopTimeWhereUniqueInput;

  @TypeGraphQL.Field(_type => StopTimeCreateWithoutTripInput, {
    nullable: false
  })
  create!: StopTimeCreateWithoutTripInput;
}
