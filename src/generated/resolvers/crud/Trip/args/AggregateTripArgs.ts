import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripOrderByWithRelationInput } from "../../../inputs/TripOrderByWithRelationInput";
import { TripWhereInput } from "../../../inputs/TripWhereInput";
import { TripWhereUniqueInput } from "../../../inputs/TripWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTripArgs {
  @TypeGraphQL.Field(_type => TripWhereInput, {
    nullable: true
  })
  where?: TripWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TripOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TripOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: true
  })
  cursor?: TripWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
