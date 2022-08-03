import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopTimeCreateManyTripInput } from "../inputs/StopTimeCreateManyTripInput";

@TypeGraphQL.InputType("StopTimeCreateManyTripInputEnvelope", {
  isAbstract: true
})
export class StopTimeCreateManyTripInputEnvelope {
  @TypeGraphQL.Field(_type => [StopTimeCreateManyTripInput], {
    nullable: false
  })
  data!: StopTimeCreateManyTripInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
