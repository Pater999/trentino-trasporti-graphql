import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RouteCreateInput } from "../../../inputs/RouteCreateInput";
import { RouteUpdateInput } from "../../../inputs/RouteUpdateInput";
import { RouteWhereUniqueInput } from "../../../inputs/RouteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneRouteArgs {
  @TypeGraphQL.Field(_type => RouteWhereUniqueInput, {
    nullable: false
  })
  where!: RouteWhereUniqueInput;

  @TypeGraphQL.Field(_type => RouteCreateInput, {
    nullable: false
  })
  create!: RouteCreateInput;

  @TypeGraphQL.Field(_type => RouteUpdateInput, {
    nullable: false
  })
  update!: RouteUpdateInput;
}
