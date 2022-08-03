import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RouteCreateOrConnectWithoutTripsInput } from "../inputs/RouteCreateOrConnectWithoutTripsInput";
import { RouteCreateWithoutTripsInput } from "../inputs/RouteCreateWithoutTripsInput";
import { RouteUpdateWithoutTripsInput } from "../inputs/RouteUpdateWithoutTripsInput";
import { RouteUpsertWithoutTripsInput } from "../inputs/RouteUpsertWithoutTripsInput";
import { RouteWhereUniqueInput } from "../inputs/RouteWhereUniqueInput";

@TypeGraphQL.InputType("RouteUpdateOneRequiredWithoutTripsNestedInput", {
  isAbstract: true
})
export class RouteUpdateOneRequiredWithoutTripsNestedInput {
  @TypeGraphQL.Field(_type => RouteCreateWithoutTripsInput, {
    nullable: true
  })
  create?: RouteCreateWithoutTripsInput | undefined;

  @TypeGraphQL.Field(_type => RouteCreateOrConnectWithoutTripsInput, {
    nullable: true
  })
  connectOrCreate?: RouteCreateOrConnectWithoutTripsInput | undefined;

  @TypeGraphQL.Field(_type => RouteUpsertWithoutTripsInput, {
    nullable: true
  })
  upsert?: RouteUpsertWithoutTripsInput | undefined;

  @TypeGraphQL.Field(_type => RouteWhereUniqueInput, {
    nullable: true
  })
  connect?: RouteWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => RouteUpdateWithoutTripsInput, {
    nullable: true
  })
  update?: RouteUpdateWithoutTripsInput | undefined;
}
