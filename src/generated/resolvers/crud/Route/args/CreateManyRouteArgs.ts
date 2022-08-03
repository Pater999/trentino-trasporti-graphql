import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RouteCreateManyInput } from "../../../inputs/RouteCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyRouteArgs {
  @TypeGraphQL.Field(_type => [RouteCreateManyInput], {
    nullable: false
  })
  data!: RouteCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
