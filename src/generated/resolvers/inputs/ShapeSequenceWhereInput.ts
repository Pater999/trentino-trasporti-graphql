import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ShapeRelationFilter } from "../inputs/ShapeRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ShapeSequenceWhereInput", {
  isAbstract: true
})
export class ShapeSequenceWhereInput {
  @TypeGraphQL.Field(_type => [ShapeSequenceWhereInput], {
    nullable: true
  })
  AND?: ShapeSequenceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShapeSequenceWhereInput], {
    nullable: true
  })
  OR?: ShapeSequenceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShapeSequenceWhereInput], {
    nullable: true
  })
  NOT?: ShapeSequenceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  shapeId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ShapeRelationFilter, {
    nullable: true
  })
  shape?: ShapeRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  shapePtLat?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  shapePtLon?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  shapePtSequence?: IntFilter | undefined;
}
