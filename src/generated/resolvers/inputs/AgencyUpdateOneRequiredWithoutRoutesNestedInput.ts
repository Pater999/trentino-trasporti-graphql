import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AgencyCreateOrConnectWithoutRoutesInput } from "../inputs/AgencyCreateOrConnectWithoutRoutesInput";
import { AgencyCreateWithoutRoutesInput } from "../inputs/AgencyCreateWithoutRoutesInput";
import { AgencyUpdateWithoutRoutesInput } from "../inputs/AgencyUpdateWithoutRoutesInput";
import { AgencyUpsertWithoutRoutesInput } from "../inputs/AgencyUpsertWithoutRoutesInput";
import { AgencyWhereUniqueInput } from "../inputs/AgencyWhereUniqueInput";

@TypeGraphQL.InputType("AgencyUpdateOneRequiredWithoutRoutesNestedInput", {
  isAbstract: true
})
export class AgencyUpdateOneRequiredWithoutRoutesNestedInput {
  @TypeGraphQL.Field(_type => AgencyCreateWithoutRoutesInput, {
    nullable: true
  })
  create?: AgencyCreateWithoutRoutesInput | undefined;

  @TypeGraphQL.Field(_type => AgencyCreateOrConnectWithoutRoutesInput, {
    nullable: true
  })
  connectOrCreate?: AgencyCreateOrConnectWithoutRoutesInput | undefined;

  @TypeGraphQL.Field(_type => AgencyUpsertWithoutRoutesInput, {
    nullable: true
  })
  upsert?: AgencyUpsertWithoutRoutesInput | undefined;

  @TypeGraphQL.Field(_type => AgencyWhereUniqueInput, {
    nullable: true
  })
  connect?: AgencyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AgencyUpdateWithoutRoutesInput, {
    nullable: true
  })
  update?: AgencyUpdateWithoutRoutesInput | undefined;
}
