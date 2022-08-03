import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripUpdateWithoutRouteInput } from "../inputs/TripUpdateWithoutRouteInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripUpdateWithWhereUniqueWithoutRouteInput", {
  isAbstract: true
})
export class TripUpdateWithWhereUniqueWithoutRouteInput {
  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: false
  })
  where!: TripWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripUpdateWithoutRouteInput, {
    nullable: false
  })
  data!: TripUpdateWithoutRouteInput;
}
