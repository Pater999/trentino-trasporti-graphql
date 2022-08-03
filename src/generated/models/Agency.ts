import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Route } from "../models/Route";
import { AgencyCount } from "../resolvers/outputs/AgencyCount";

@TypeGraphQL.ObjectType("Agency", {
  isAbstract: true,
  simpleResolvers: true
})
export class Agency {
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

  routes?: Route[];

  @TypeGraphQL.Field(_type => AgencyCount, {
    nullable: true
  })
  _count?: AgencyCount | null;
}
