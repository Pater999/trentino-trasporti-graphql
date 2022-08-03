import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateWithoutRouteInput } from "../inputs/TripCreateWithoutRouteInput";
import { TripUpdateWithoutRouteInput } from "../inputs/TripUpdateWithoutRouteInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripUpsertWithWhereUniqueWithoutRouteInput", {
  isAbstract: true
})
export class TripUpsertWithWhereUniqueWithoutRouteInput {
  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: false
  })
  where!: TripWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripUpdateWithoutRouteInput, {
    nullable: false
  })
  update!: TripUpdateWithoutRouteInput;

  @TypeGraphQL.Field(_type => TripCreateWithoutRouteInput, {
    nullable: false
  })
  create!: TripCreateWithoutRouteInput;
}
