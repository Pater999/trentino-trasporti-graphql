import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripUpdateInput } from "../../../inputs/TripUpdateInput";
import { TripWhereUniqueInput } from "../../../inputs/TripWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTripArgs {
  @TypeGraphQL.Field(_type => TripUpdateInput, {
    nullable: false
  })
  data!: TripUpdateInput;

  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: false
  })
  where!: TripWhereUniqueInput;
}
