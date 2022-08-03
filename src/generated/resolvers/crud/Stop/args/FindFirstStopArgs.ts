import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StopOrderByWithRelationInput } from "../../../inputs/StopOrderByWithRelationInput";
import { StopWhereInput } from "../../../inputs/StopWhereInput";
import { StopWhereUniqueInput } from "../../../inputs/StopWhereUniqueInput";
import { StopScalarFieldEnum } from "../../../../enums/StopScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstStopArgs {
  @TypeGraphQL.Field(_type => StopWhereInput, {
    nullable: true
  })
  where?: StopWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StopOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: StopOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => StopWhereUniqueInput, {
    nullable: true
  })
  cursor?: StopWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [StopScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"stopId" | "stopCode" | "stopName" | "stopDesc" | "stopLat" | "stopLon" | "zoneId" | "wheelchairBoarding" | "category"> | undefined;
}
