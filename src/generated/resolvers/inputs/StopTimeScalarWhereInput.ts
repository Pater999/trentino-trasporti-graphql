import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("StopTimeScalarWhereInput", {
  isAbstract: true
})
export class StopTimeScalarWhereInput {
  @TypeGraphQL.Field(_type => [StopTimeScalarWhereInput], {
    nullable: true
  })
  AND?: StopTimeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StopTimeScalarWhereInput], {
    nullable: true
  })
  OR?: StopTimeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StopTimeScalarWhereInput], {
    nullable: true
  })
  NOT?: StopTimeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  tripId?: StringFilter | undefined;

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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  stopSequence?: IntFilter | undefined;
}
