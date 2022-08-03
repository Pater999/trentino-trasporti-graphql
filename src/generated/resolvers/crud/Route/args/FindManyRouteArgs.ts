import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RouteOrderByWithRelationInput } from "../../../inputs/RouteOrderByWithRelationInput";
import { RouteWhereInput } from "../../../inputs/RouteWhereInput";
import { RouteWhereUniqueInput } from "../../../inputs/RouteWhereUniqueInput";
import { RouteScalarFieldEnum } from "../../../../enums/RouteScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyRouteArgs {
  @TypeGraphQL.Field(_type => RouteWhereInput, {
    nullable: true
  })
  where?: RouteWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RouteOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: RouteOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => RouteWhereUniqueInput, {
    nullable: true
  })
  cursor?: RouteWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [RouteScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"routeId" | "agencyId" | "routeShortName" | "routeLongName" | "routeType" | "routeColor" | "routeTextColor" | "category"> | undefined;
}
