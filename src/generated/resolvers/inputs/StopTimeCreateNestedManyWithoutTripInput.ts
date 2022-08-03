import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopTimeCreateManyTripInputEnvelope } from "../inputs/StopTimeCreateManyTripInputEnvelope";
import { StopTimeCreateOrConnectWithoutTripInput } from "../inputs/StopTimeCreateOrConnectWithoutTripInput";
import { StopTimeCreateWithoutTripInput } from "../inputs/StopTimeCreateWithoutTripInput";
import { StopTimeWhereUniqueInput } from "../inputs/StopTimeWhereUniqueInput";

@TypeGraphQL.InputType("StopTimeCreateNestedManyWithoutTripInput", {
  isAbstract: true
})
export class StopTimeCreateNestedManyWithoutTripInput {
  @TypeGraphQL.Field(_type => [StopTimeCreateWithoutTripInput], {
    nullable: true
  })
  create?: StopTimeCreateWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => [StopTimeCreateOrConnectWithoutTripInput], {
    nullable: true
  })
  connectOrCreate?: StopTimeCreateOrConnectWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => StopTimeCreateManyTripInputEnvelope, {
    nullable: true
  })
  createMany?: StopTimeCreateManyTripInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [StopTimeWhereUniqueInput], {
    nullable: true
  })
  connect?: StopTimeWhereUniqueInput[] | undefined;
}
