import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CalendarCreateOrConnectWithoutTripsInput } from "../inputs/CalendarCreateOrConnectWithoutTripsInput";
import { CalendarCreateWithoutTripsInput } from "../inputs/CalendarCreateWithoutTripsInput";
import { CalendarUpdateWithoutTripsInput } from "../inputs/CalendarUpdateWithoutTripsInput";
import { CalendarUpsertWithoutTripsInput } from "../inputs/CalendarUpsertWithoutTripsInput";
import { CalendarWhereUniqueInput } from "../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.InputType("CalendarUpdateOneRequiredWithoutTripsNestedInput", {
  isAbstract: true
})
export class CalendarUpdateOneRequiredWithoutTripsNestedInput {
  @TypeGraphQL.Field(_type => CalendarCreateWithoutTripsInput, {
    nullable: true
  })
  create?: CalendarCreateWithoutTripsInput | undefined;

  @TypeGraphQL.Field(_type => CalendarCreateOrConnectWithoutTripsInput, {
    nullable: true
  })
  connectOrCreate?: CalendarCreateOrConnectWithoutTripsInput | undefined;

  @TypeGraphQL.Field(_type => CalendarUpsertWithoutTripsInput, {
    nullable: true
  })
  upsert?: CalendarUpsertWithoutTripsInput | undefined;

  @TypeGraphQL.Field(_type => CalendarWhereUniqueInput, {
    nullable: true
  })
  connect?: CalendarWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CalendarUpdateWithoutTripsInput, {
    nullable: true
  })
  update?: CalendarUpdateWithoutTripsInput | undefined;
}
