import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AgencyOrderByWithRelationInput } from "../../../inputs/AgencyOrderByWithRelationInput";
import { AgencyWhereInput } from "../../../inputs/AgencyWhereInput";
import { AgencyWhereUniqueInput } from "../../../inputs/AgencyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAgencyArgs {
  @TypeGraphQL.Field(_type => AgencyWhereInput, {
    nullable: true
  })
  where?: AgencyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AgencyOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AgencyOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AgencyWhereUniqueInput, {
    nullable: true
  })
  cursor?: AgencyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
