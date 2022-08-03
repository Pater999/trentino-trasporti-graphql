import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RouteCreateManyAgencyInput } from "../inputs/RouteCreateManyAgencyInput";

@TypeGraphQL.InputType("RouteCreateManyAgencyInputEnvelope", {
  isAbstract: true
})
export class RouteCreateManyAgencyInputEnvelope {
  @TypeGraphQL.Field(_type => [RouteCreateManyAgencyInput], {
    nullable: false
  })
  data!: RouteCreateManyAgencyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
