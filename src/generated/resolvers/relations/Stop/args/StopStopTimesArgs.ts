import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StopTimeOrderByWithRelationInput } from "../../../inputs/StopTimeOrderByWithRelationInput";
import { StopTimeWhereInput } from "../../../inputs/StopTimeWhereInput";
import { StopTimeWhereUniqueInput } from "../../../inputs/StopTimeWhereUniqueInput";
import { StopTimeScalarFieldEnum } from "../../../../enums/StopTimeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class StopStopTimesArgs {
  @TypeGraphQL.Field(_type => StopTimeWhereInput, {
    nullable: true
  })
  where?: StopTimeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StopTimeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: StopTimeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => StopTimeWhereUniqueInput, {
    nullable: true
  })
  cursor?: StopTimeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [StopTimeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"tripId" | "arrivalTime" | "departureTime" | "stopId" | "stopSequence"> | undefined;
}
