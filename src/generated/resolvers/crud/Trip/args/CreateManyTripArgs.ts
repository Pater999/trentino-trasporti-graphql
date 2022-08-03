import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripCreateManyInput } from "../../../inputs/TripCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTripArgs {
  @TypeGraphQL.Field(_type => [TripCreateManyInput], {
    nullable: false
  })
  data!: TripCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
