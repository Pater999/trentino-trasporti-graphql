import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateShapeArgs } from "./args/AggregateShapeArgs";
import { Shape } from "../../../models/Shape";
import { AggregateShape } from "../../outputs/AggregateShape";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Shape)
export class AggregateShapeResolver {
  @TypeGraphQL.Query(_returns => AggregateShape, {
    nullable: false
  })
  async aggregateShape(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateShapeArgs): Promise<AggregateShape> {
    return getPrismaFromContext(ctx).shape.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
