import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopTimeTripIdStopSequenceCompoundUniqueInput } from "../inputs/StopTimeTripIdStopSequenceCompoundUniqueInput";

@TypeGraphQL.InputType("StopTimeWhereUniqueInput", {
  isAbstract: true
})
export class StopTimeWhereUniqueInput {
  @TypeGraphQL.Field(_type => StopTimeTripIdStopSequenceCompoundUniqueInput, {
    nullable: true
  })
  tripId_stopSequence?: StopTimeTripIdStopSequenceCompoundUniqueInput | undefined;
}
