import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateShapeSequenceArgs } from "./args/AggregateShapeSequenceArgs";
import { CreateManyShapeSequenceArgs } from "./args/CreateManyShapeSequenceArgs";
import { CreateOneShapeSequenceArgs } from "./args/CreateOneShapeSequenceArgs";
import { DeleteManyShapeSequenceArgs } from "./args/DeleteManyShapeSequenceArgs";
import { DeleteOneShapeSequenceArgs } from "./args/DeleteOneShapeSequenceArgs";
import { FindFirstShapeSequenceArgs } from "./args/FindFirstShapeSequenceArgs";
import { FindManyShapeSequenceArgs } from "./args/FindManyShapeSequenceArgs";
import { FindUniqueShapeSequenceArgs } from "./args/FindUniqueShapeSequenceArgs";
import { GroupByShapeSequenceArgs } from "./args/GroupByShapeSequenceArgs";
import { UpdateManyShapeSequenceArgs } from "./args/UpdateManyShapeSequenceArgs";
import { UpdateOneShapeSequenceArgs } from "./args/UpdateOneShapeSequenceArgs";
import { UpsertOneShapeSequenceArgs } from "./args/UpsertOneShapeSequenceArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ShapeSequence } from "../../../models/ShapeSequence";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateShapeSequence } from "../../outputs/AggregateShapeSequence";
import { ShapeSequenceGroupBy } from "../../outputs/ShapeSequenceGroupBy";

@TypeGraphQL.Resolver(_of => ShapeSequence)
export class ShapeSequenceCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateShapeSequence, {
    nullable: false
  })
  async aggregateShapeSequence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateShapeSequenceArgs): Promise<AggregateShapeSequence> {
    return getPrismaFromContext(ctx).shapeSequence.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyShapeSequence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyShapeSequenceArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).shapeSequence.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ShapeSequence, {
    nullable: false
  })
  async createOneShapeSequence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneShapeSequenceArgs): Promise<ShapeSequence> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).shapeSequence.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyShapeSequence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyShapeSequenceArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).shapeSequence.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ShapeSequence, {
    nullable: true
  })
  async deleteOneShapeSequence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneShapeSequenceArgs): Promise<ShapeSequence | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).shapeSequence.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ShapeSequence, {
    nullable: true
  })
  async findFirstShapeSequence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstShapeSequenceArgs): Promise<ShapeSequence | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).shapeSequence.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ShapeSequence], {
    nullable: false
  })
  async shapeSequences(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyShapeSequenceArgs): Promise<ShapeSequence[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).shapeSequence.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ShapeSequence, {
    nullable: true
  })
  async shapeSequence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueShapeSequenceArgs): Promise<ShapeSequence | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).shapeSequence.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ShapeSequenceGroupBy], {
    nullable: false
  })
  async groupByShapeSequence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByShapeSequenceArgs): Promise<ShapeSequenceGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).shapeSequence.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyShapeSequence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyShapeSequenceArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).shapeSequence.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ShapeSequence, {
    nullable: true
  })
  async updateOneShapeSequence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneShapeSequenceArgs): Promise<ShapeSequence | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).shapeSequence.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ShapeSequence, {
    nullable: false
  })
  async upsertOneShapeSequence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneShapeSequenceArgs): Promise<ShapeSequence> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).shapeSequence.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
