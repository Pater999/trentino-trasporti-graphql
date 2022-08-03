import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripWhereInput } from "../../../inputs/TripWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTripArgs {
  @TypeGraphQL.Field(_type => TripWhereInput, {
    nullable: true
  })
  where?: TripWhereInput | undefined;
}
