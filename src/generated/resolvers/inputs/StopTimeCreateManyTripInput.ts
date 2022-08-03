import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("StopTimeCreateManyTripInput", {
  isAbstract: true
})
export class StopTimeCreateManyTripInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  arrivalTime!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  departureTime!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  stopId!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  stopSequence!: number;
}
