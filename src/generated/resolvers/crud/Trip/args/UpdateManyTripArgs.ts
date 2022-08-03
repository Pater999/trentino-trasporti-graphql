import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripUpdateManyMutationInput } from "../../../inputs/TripUpdateManyMutationInput";
import { TripWhereInput } from "../../../inputs/TripWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTripArgs {
  @TypeGraphQL.Field(_type => TripUpdateManyMutationInput, {
    nullable: false
  })
  data!: TripUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TripWhereInput, {
    nullable: true
  })
  where?: TripWhereInput | undefined;
}
