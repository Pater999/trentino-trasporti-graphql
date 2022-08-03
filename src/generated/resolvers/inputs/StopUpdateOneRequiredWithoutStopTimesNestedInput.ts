import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopCreateOrConnectWithoutStopTimesInput } from "../inputs/StopCreateOrConnectWithoutStopTimesInput";
import { StopCreateWithoutStopTimesInput } from "../inputs/StopCreateWithoutStopTimesInput";
import { StopUpdateWithoutStopTimesInput } from "../inputs/StopUpdateWithoutStopTimesInput";
import { StopUpsertWithoutStopTimesInput } from "../inputs/StopUpsertWithoutStopTimesInput";
import { StopWhereUniqueInput } from "../inputs/StopWhereUniqueInput";

@TypeGraphQL.InputType("StopUpdateOneRequiredWithoutStopTimesNestedInput", {
  isAbstract: true
})
export class StopUpdateOneRequiredWithoutStopTimesNestedInput {
  @TypeGraphQL.Field(_type => StopCreateWithoutStopTimesInput, {
    nullable: true
  })
  create?: StopCreateWithoutStopTimesInput | undefined;

  @TypeGraphQL.Field(_type => StopCreateOrConnectWithoutStopTimesInput, {
    nullable: true
  })
  connectOrCreate?: StopCreateOrConnectWithoutStopTimesInput | undefined;

  @TypeGraphQL.Field(_type => StopUpsertWithoutStopTimesInput, {
    nullable: true
  })
  upsert?: StopUpsertWithoutStopTimesInput | undefined;

  @TypeGraphQL.Field(_type => StopWhereUniqueInput, {
    nullable: true
  })
  connect?: StopWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StopUpdateWithoutStopTimesInput, {
    nullable: true
  })
  update?: StopUpdateWithoutStopTimesInput | undefined;
}
