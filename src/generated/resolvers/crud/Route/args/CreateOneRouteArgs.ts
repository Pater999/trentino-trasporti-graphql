import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RouteCreateInput } from "../../../inputs/RouteCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneRouteArgs {
  @TypeGraphQL.Field(_type => RouteCreateInput, {
    nullable: false
  })
  data!: RouteCreateInput;
}
