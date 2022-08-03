import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateManyRouteInputEnvelope } from "../inputs/TripCreateManyRouteInputEnvelope";
import { TripCreateOrConnectWithoutRouteInput } from "../inputs/TripCreateOrConnectWithoutRouteInput";
import { TripCreateWithoutRouteInput } from "../inputs/TripCreateWithoutRouteInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripCreateNestedManyWithoutRouteInput", {
  isAbstract: true
})
export class TripCreateNestedManyWithoutRouteInput {
  @TypeGraphQL.Field(_type => [TripCreateWithoutRouteInput], {
    nullable: true
  })
  create?: TripCreateWithoutRouteInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCreateOrConnectWithoutRouteInput], {
    nullable: true
  })
  connectOrCreate?: TripCreateOrConnectWithoutRouteInput[] | undefined;

  @TypeGraphQL.Field(_type => TripCreateManyRouteInputEnvelope, {
    nullable: true
  })
  createMany?: TripCreateManyRouteInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TripWhereUniqueInput], {
    nullable: true
  })
  connect?: TripWhereUniqueInput[] | undefined;
}
