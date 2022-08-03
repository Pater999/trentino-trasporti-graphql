import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RouteWhereUniqueInput } from "../../../inputs/RouteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueRouteArgs {
  @TypeGraphQL.Field(_type => RouteWhereUniqueInput, {
    nullable: false
  })
  where!: RouteWhereUniqueInput;
}
