import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateManyServiceInput } from "../inputs/TripCreateManyServiceInput";

@TypeGraphQL.InputType("TripCreateManyServiceInputEnvelope", {
  isAbstract: true
})
export class TripCreateManyServiceInputEnvelope {
  @TypeGraphQL.Field(_type => [TripCreateManyServiceInput], {
    nullable: false
  })
  data!: TripCreateManyServiceInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
