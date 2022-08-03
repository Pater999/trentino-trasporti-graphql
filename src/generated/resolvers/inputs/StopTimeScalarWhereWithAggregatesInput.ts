import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("StopTimeScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class StopTimeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [StopTimeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: StopTimeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StopTimeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: StopTimeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StopTimeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: StopTimeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  tripId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  arrivalTime?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  departureTime?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  stopId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  stopSequence?: IntWithAggregatesFilter | undefined;
}
