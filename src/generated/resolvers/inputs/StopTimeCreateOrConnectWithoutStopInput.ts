import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopTimeCreateWithoutStopInput } from "../inputs/StopTimeCreateWithoutStopInput";
import { StopTimeWhereUniqueInput } from "../inputs/StopTimeWhereUniqueInput";

@TypeGraphQL.InputType("StopTimeCreateOrConnectWithoutStopInput", {
  isAbstract: true
})
export class StopTimeCreateOrConnectWithoutStopInput {
  @TypeGraphQL.Field(_type => StopTimeWhereUniqueInput, {
    nullable: false
  })
  where!: StopTimeWhereUniqueInput;

  @TypeGraphQL.Field(_type => StopTimeCreateWithoutStopInput, {
    nullable: false
  })
  create!: StopTimeCreateWithoutStopInput;
}
