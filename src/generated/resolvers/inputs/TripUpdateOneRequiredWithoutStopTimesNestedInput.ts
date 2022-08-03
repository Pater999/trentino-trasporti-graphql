import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateOrConnectWithoutStopTimesInput } from "../inputs/TripCreateOrConnectWithoutStopTimesInput";
import { TripCreateWithoutStopTimesInput } from "../inputs/TripCreateWithoutStopTimesInput";
import { TripUpdateWithoutStopTimesInput } from "../inputs/TripUpdateWithoutStopTimesInput";
import { TripUpsertWithoutStopTimesInput } from "../inputs/TripUpsertWithoutStopTimesInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripUpdateOneRequiredWithoutStopTimesNestedInput", {
  isAbstract: true
})
export class TripUpdateOneRequiredWithoutStopTimesNestedInput {
  @TypeGraphQL.Field(_type => TripCreateWithoutStopTimesInput, {
    nullable: true
  })
  create?: TripCreateWithoutStopTimesInput | undefined;

  @TypeGraphQL.Field(_type => TripCreateOrConnectWithoutStopTimesInput, {
    nullable: true
  })
  connectOrCreate?: TripCreateOrConnectWithoutStopTimesInput | undefined;

  @TypeGraphQL.Field(_type => TripUpsertWithoutStopTimesInput, {
    nullable: true
  })
  upsert?: TripUpsertWithoutStopTimesInput | undefined;

  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: true
  })
  connect?: TripWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TripUpdateWithoutStopTimesInput, {
    nullable: true
  })
  update?: TripUpdateWithoutStopTimesInput | undefined;
}
