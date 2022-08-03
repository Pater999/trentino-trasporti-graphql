import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShapeOrderByWithRelationInput } from "../inputs/ShapeOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ShapeSequenceOrderByWithRelationInput", {
  isAbstract: true
})
export class ShapeSequenceOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shapeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ShapeOrderByWithRelationInput, {
    nullable: true
  })
  shape?: ShapeOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shapePtLat?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shapePtLon?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shapePtSequence?: "asc" | "desc" | undefined;
}
