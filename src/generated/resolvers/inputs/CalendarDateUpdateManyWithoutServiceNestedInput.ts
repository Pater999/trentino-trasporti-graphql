import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CalendarDateCreateManyServiceInputEnvelope } from "../inputs/CalendarDateCreateManyServiceInputEnvelope";
import { CalendarDateCreateOrConnectWithoutServiceInput } from "../inputs/CalendarDateCreateOrConnectWithoutServiceInput";
import { CalendarDateCreateWithoutServiceInput } from "../inputs/CalendarDateCreateWithoutServiceInput";
import { CalendarDateScalarWhereInput } from "../inputs/CalendarDateScalarWhereInput";
import { CalendarDateUpdateManyWithWhereWithoutServiceInput } from "../inputs/CalendarDateUpdateManyWithWhereWithoutServiceInput";
import { CalendarDateUpdateWithWhereUniqueWithoutServiceInput } from "../inputs/CalendarDateUpdateWithWhereUniqueWithoutServiceInput";
import { CalendarDateUpsertWithWhereUniqueWithoutServiceInput } from "../inputs/CalendarDateUpsertWithWhereUniqueWithoutServiceInput";
import { CalendarDateWhereUniqueInput } from "../inputs/CalendarDateWhereUniqueInput";

@TypeGraphQL.InputType("CalendarDateUpdateManyWithoutServiceNestedInput", {
  isAbstract: true
})
export class CalendarDateUpdateManyWithoutServiceNestedInput {
  @TypeGraphQL.Field(_type => [CalendarDateCreateWithoutServiceInput], {
    nullable: true
  })
  create?: CalendarDateCreateWithoutServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => [CalendarDateCreateOrConnectWithoutServiceInput], {
    nullable: true
  })
  connectOrCreate?: CalendarDateCreateOrConnectWithoutServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => [CalendarDateUpsertWithWhereUniqueWithoutServiceInput], {
    nullable: true
  })
  upsert?: CalendarDateUpsertWithWhereUniqueWithoutServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => CalendarDateCreateManyServiceInputEnvelope, {
    nullable: true
  })
  createMany?: CalendarDateCreateManyServiceInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CalendarDateWhereUniqueInput], {
    nullable: true
  })
  set?: CalendarDateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CalendarDateWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CalendarDateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CalendarDateWhereUniqueInput], {
    nullable: true
  })
  delete?: CalendarDateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CalendarDateWhereUniqueInput], {
    nullable: true
  })
  connect?: CalendarDateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CalendarDateUpdateWithWhereUniqueWithoutServiceInput], {
    nullable: true
  })
  update?: CalendarDateUpdateWithWhereUniqueWithoutServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => [CalendarDateUpdateManyWithWhereWithoutServiceInput], {
    nullable: true
  })
  updateMany?: CalendarDateUpdateManyWithWhereWithoutServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => [CalendarDateScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CalendarDateScalarWhereInput[] | undefined;
}
