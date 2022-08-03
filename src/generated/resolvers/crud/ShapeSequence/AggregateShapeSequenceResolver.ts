import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateShapeSequenceArgs } from "./args/AggregateShapeSequenceArgs";
import { ShapeSequence } from "../../../models/ShapeSequence";
import { AggregateShapeSequence } from "../../outputs/AggregateShapeSequence";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ShapeSequence)
export class AggregateShapeSequenceResolver {
  @TypeGraphQL.Query(_returns => AggregateShapeSequence, {
    nullable: false
  })
  async aggregateShapeSequence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateShapeSequenceArgs): Promise<AggregateShapeSequence> {
    return getPrismaFromContext(ctx).shapeSequence.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
