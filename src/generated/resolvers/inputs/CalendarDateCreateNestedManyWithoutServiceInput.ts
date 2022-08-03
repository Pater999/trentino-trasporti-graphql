import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CalendarDateCreateManyServiceInputEnvelope } from "../inputs/CalendarDateCreateManyServiceInputEnvelope";
import { CalendarDateCreateOrConnectWithoutServiceInput } from "../inputs/CalendarDateCreateOrConnectWithoutServiceInput";
import { CalendarDateCreateWithoutServiceInput } from "../inputs/CalendarDateCreateWithoutServiceInput";
import { CalendarDateWhereUniqueInput } from "../inputs/CalendarDateWhereUniqueInput";

@TypeGraphQL.InputType("CalendarDateCreateNestedManyWithoutServiceInput", {
  isAbstract: true
})
export class CalendarDateCreateNestedManyWithoutServiceInput {
  @TypeGraphQL.Field(_type => [CalendarDateCreateWithoutServiceInput], {
    nullable: true
  })
  create?: CalendarDateCreateWithoutServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => [CalendarDateCreateOrConnectWithoutServiceInput], {
    nullable: true
  })
  connectOrCreate?: CalendarDateCreateOrConnectWithoutServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => CalendarDateCreateManyServiceInputEnvelope, {
    nullable: true
  })
  createMany?: CalendarDateCreateManyServiceInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CalendarDateWhereUniqueInput], {
    nullable: true
  })
  connect?: CalendarDateWhereUniqueInput[] | undefined;
}
