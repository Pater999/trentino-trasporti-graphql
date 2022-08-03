import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RouteWhereInput } from "../../../inputs/RouteWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRouteArgs {
  @TypeGraphQL.Field(_type => RouteWhereInput, {
    nullable: true
  })
  where?: RouteWhereInput | undefined;
}
