import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopTimeCreateManyStopInputEnvelope } from "../inputs/StopTimeCreateManyStopInputEnvelope";
import { StopTimeCreateOrConnectWithoutStopInput } from "../inputs/StopTimeCreateOrConnectWithoutStopInput";
import { StopTimeCreateWithoutStopInput } from "../inputs/StopTimeCreateWithoutStopInput";
import { StopTimeWhereUniqueInput } from "../inputs/StopTimeWhereUniqueInput";

@TypeGraphQL.InputType("StopTimeCreateNestedManyWithoutStopInput", {
  isAbstract: true
})
export class StopTimeCreateNestedManyWithoutStopInput {
  @TypeGraphQL.Field(_type => [StopTimeCreateWithoutStopInput], {
    nullable: true
  })
  create?: StopTimeCreateWithoutStopInput[] | undefined;

  @TypeGraphQL.Field(_type => [StopTimeCreateOrConnectWithoutStopInput], {
    nullable: true
  })
  connectOrCreate?: StopTimeCreateOrConnectWithoutStopInput[] | undefined;

  @TypeGraphQL.Field(_type => StopTimeCreateManyStopInputEnvelope, {
    nullable: true
  })
  createMany?: StopTimeCreateManyStopInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [StopTimeWhereUniqueInput], {
    nullable: true
  })
  connect?: StopTimeWhereUniqueInput[] | undefined;
}
