import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { RouteListRelationFilter } from "../inputs/RouteListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("AgencyWhereInput", {
  isAbstract: true
})
export class AgencyWhereInput {
  @TypeGraphQL.Field(_type => [AgencyWhereInput], {
    nullable: true
  })
  AND?: AgencyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AgencyWhereInput], {
    nullable: true
  })
  OR?: AgencyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AgencyWhereInput], {
    nullable: true
  })
  NOT?: AgencyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  agencyId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  agencyName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  agencyUrl?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  agencyTimezone?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  agencyPhone?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  agencyLang?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => RouteListRelationFilter, {
    nullable: true
  })
  routes?: RouteListRelationFilter | undefined;
}
