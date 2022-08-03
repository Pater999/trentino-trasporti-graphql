import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("StopTimeCreateManyStopInput", {
  isAbstract: true
})
export class StopTimeCreateManyStopInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tripId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  arrivalTime!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  departureTime!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  stopSequence!: number;
}
