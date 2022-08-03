import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopTimeCreateManyStopInput } from "../inputs/StopTimeCreateManyStopInput";

@TypeGraphQL.InputType("StopTimeCreateManyStopInputEnvelope", {
  isAbstract: true
})
export class StopTimeCreateManyStopInputEnvelope {
  @TypeGraphQL.Field(_type => [StopTimeCreateManyStopInput], {
    nullable: false
  })
  data!: StopTimeCreateManyStopInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
