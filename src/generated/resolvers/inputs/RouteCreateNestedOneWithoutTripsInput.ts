import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RouteCreateOrConnectWithoutTripsInput } from "../inputs/RouteCreateOrConnectWithoutTripsInput";
import { RouteCreateWithoutTripsInput } from "../inputs/RouteCreateWithoutTripsInput";
import { RouteWhereUniqueInput } from "../inputs/RouteWhereUniqueInput";

@TypeGraphQL.InputType("RouteCreateNestedOneWithoutTripsInput", {
  isAbstract: true
})
export class RouteCreateNestedOneWithoutTripsInput {
  @TypeGraphQL.Field(_type => RouteCreateWithoutTripsInput, {
    nullable: true
  })
  create?: RouteCreateWithoutTripsInput | undefined;

  @TypeGraphQL.Field(_type => RouteCreateOrConnectWithoutTripsInput, {
    nullable: true
  })
  connectOrCreate?: RouteCreateOrConnectWithoutTripsInput | undefined;

  @TypeGraphQL.Field(_type => RouteWhereUniqueInput, {
    nullable: true
  })
  connect?: RouteWhereUniqueInput | undefined;
}
