import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StopTimeCreateManyInput } from "../../../inputs/StopTimeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyStopTimeArgs {
  @TypeGraphQL.Field(_type => [StopTimeCreateManyInput], {
    nullable: false
  })
  data!: StopTimeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
