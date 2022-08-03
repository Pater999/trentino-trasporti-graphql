import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RouteCreateWithoutTripsInput } from "../inputs/RouteCreateWithoutTripsInput";
import { RouteUpdateWithoutTripsInput } from "../inputs/RouteUpdateWithoutTripsInput";

@TypeGraphQL.InputType("RouteUpsertWithoutTripsInput", {
  isAbstract: true
})
export class RouteUpsertWithoutTripsInput {
  @TypeGraphQL.Field(_type => RouteUpdateWithoutTripsInput, {
    nullable: false
  })
  update!: RouteUpdateWithoutTripsInput;

  @TypeGraphQL.Field(_type => RouteCreateWithoutTripsInput, {
    nullable: false
  })
  create!: RouteCreateWithoutTripsInput;
}
