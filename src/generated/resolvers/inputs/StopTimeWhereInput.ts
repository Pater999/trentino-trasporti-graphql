import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StopRelationFilter } from "../inputs/StopRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TripRelationFilter } from "../inputs/TripRelationFilter";

@TypeGraphQL.InputType("StopTimeWhereInput", {
  isAbstract: true
})
export class StopTimeWhereInput {
  @TypeGraphQL.Field(_type => [StopTimeWhereInput], {
    nullable: true
  })
  AND?: StopTimeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StopTimeWhereInput], {
    nullable: true
  })
  OR?: StopTimeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StopTimeWhereInput], {
    nullable: true
  })
  NOT?: StopTimeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  tripId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => TripRelationFilter, {
    nullable: true
  })
  trip?: TripRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  arrivalTime?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  departureTime?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  stopId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StopRelationFilter, {
    nullable: true
  })
  stop?: StopRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  stopSequence?: IntFilter | undefined;
}
