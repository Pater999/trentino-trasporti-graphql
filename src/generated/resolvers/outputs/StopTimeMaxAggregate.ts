import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("StopTimeMaxAggregate", {
  isAbstract: true,
  simpleResolvers: true
})
export class StopTimeMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tripId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  arrivalTime!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  departureTime!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  stopId!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  stopSequence!: number | null;
}
