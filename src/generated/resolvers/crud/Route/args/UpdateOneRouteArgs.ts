import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RouteUpdateInput } from "../../../inputs/RouteUpdateInput";
import { RouteWhereUniqueInput } from "../../../inputs/RouteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneRouteArgs {
  @TypeGraphQL.Field(_type => RouteUpdateInput, {
    nullable: false
  })
  data!: RouteUpdateInput;

  @TypeGraphQL.Field(_type => RouteWhereUniqueInput, {
    nullable: false
  })
  where!: RouteWhereUniqueInput;
}
