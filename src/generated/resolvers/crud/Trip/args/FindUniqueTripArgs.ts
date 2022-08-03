import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripWhereUniqueInput } from "../../../inputs/TripWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTripArgs {
  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: false
  })
  where!: TripWhereUniqueInput;
}
