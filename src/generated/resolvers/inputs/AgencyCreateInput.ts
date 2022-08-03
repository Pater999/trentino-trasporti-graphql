import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RouteCreateNestedManyWithoutAgencyInput } from "../inputs/RouteCreateNestedManyWithoutAgencyInput";

@TypeGraphQL.InputType("AgencyCreateInput", {
  isAbstract: true
})
export class AgencyCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  agencyId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  agencyName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  agencyUrl!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  agencyTimezone!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  agencyPhone!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  agencyLang!: string;

  @TypeGraphQL.Field(_type => RouteCreateNestedManyWithoutAgencyInput, {
    nullable: true
  })
  routes?: RouteCreateNestedManyWithoutAgencyInput | undefined;
}
