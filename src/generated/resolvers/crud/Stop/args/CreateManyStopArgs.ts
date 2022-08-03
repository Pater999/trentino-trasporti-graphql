import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StopCreateManyInput } from "../../../inputs/StopCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyStopArgs {
  @TypeGraphQL.Field(_type => [StopCreateManyInput], {
    nullable: false
  })
  data!: StopCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
