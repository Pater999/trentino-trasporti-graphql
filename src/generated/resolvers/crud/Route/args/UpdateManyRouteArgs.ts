import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RouteUpdateManyMutationInput } from "../../../inputs/RouteUpdateManyMutationInput";
import { RouteWhereInput } from "../../../inputs/RouteWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRouteArgs {
  @TypeGraphQL.Field(_type => RouteUpdateManyMutationInput, {
    nullable: false
  })
  data!: RouteUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => RouteWhereInput, {
    nullable: true
  })
  where?: RouteWhereInput | undefined;
}
