import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripCreateInput } from "../../../inputs/TripCreateInput";
import { TripUpdateInput } from "../../../inputs/TripUpdateInput";
import { TripWhereUniqueInput } from "../../../inputs/TripWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTripArgs {
  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: false
  })
  where!: TripWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripCreateInput, {
    nullable: false
  })
  create!: TripCreateInput;

  @TypeGraphQL.Field(_type => TripUpdateInput, {
    nullable: false
  })
  update!: TripUpdateInput;
}
