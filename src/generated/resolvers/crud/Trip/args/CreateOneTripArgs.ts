import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripCreateInput } from "../../../inputs/TripCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTripArgs {
  @TypeGraphQL.Field(_type => TripCreateInput, {
    nullable: false
  })
  data!: TripCreateInput;
}
