import * as TypeGraphQL from "type-graphql";
import { Shape } from "../../../models/Shape";
import { ShapeSequence } from "../../../models/ShapeSequence";
import { Trip } from "../../../models/Trip";
import { ShapeShapeSequencesArgs } from "./args/ShapeShapeSequencesArgs";
import { ShapeTripsArgs } from "./args/ShapeTripsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Shape)
export class ShapeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Trip], {
    nullable: false
  })
  async trips(@TypeGraphQL.Root() shape: Shape, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ShapeTripsArgs): Promise<Trip[]> {
    return getPrismaFromContext(ctx).shape.findUnique({
      where: {
        shapeId: shape.shapeId,
      },
    }).trips(args);
  }

  @TypeGraphQL.FieldResolver(_type => [ShapeSequence], {
    nullable: false
  })
  async shapeSequences(@TypeGraphQL.Root() shape: Shape, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ShapeShapeSequencesArgs): Promise<ShapeSequence[]> {
    return getPrismaFromContext(ctx).shape.findUnique({
      where: {
        shapeId: shape.shapeId,
      },
    }).shapeSequences(args);
  }
}
