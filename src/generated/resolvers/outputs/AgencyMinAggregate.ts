import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("AgencyMinAggregate", {
  isAbstract: true,
  simpleResolvers: true
})
export class AgencyMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  agencyId!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  agencyName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  agencyUrl!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  agencyTimezone!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  agencyPhone!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  agencyLang!: string | null;
}
