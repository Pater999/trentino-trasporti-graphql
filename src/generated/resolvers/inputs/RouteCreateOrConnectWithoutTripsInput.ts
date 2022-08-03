import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RouteCreateWithoutTripsInput } from "../inputs/RouteCreateWithoutTripsInput";
import { RouteWhereUniqueInput } from "../inputs/RouteWhereUniqueInput";

@TypeGraphQL.InputType("RouteCreateOrConnectWithoutTripsInput", {
  isAbstract: true
})
export class RouteCreateOrConnectWithoutTripsInput {
  @TypeGraphQL.Field(_type => RouteWhereUniqueInput, {
    nullable: false
  })
  where!: RouteWhereUniqueInput;

  @TypeGraphQL.Field(_type => RouteCreateWithoutTripsInput, {
    nullable: false
  })
  create!: RouteCreateWithoutTripsInput;
}
