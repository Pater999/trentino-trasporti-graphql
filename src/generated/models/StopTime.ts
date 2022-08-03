import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Stop } from "../models/Stop";
import { Trip } from "../models/Trip";

@TypeGraphQL.ObjectType("StopTime", {
  isAbstract: true,
  simpleResolvers: true
})
export class StopTime {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tripId!: string;

  trip?: Trip;

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

  stop?: Stop;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  stopSequence!: number;
}
