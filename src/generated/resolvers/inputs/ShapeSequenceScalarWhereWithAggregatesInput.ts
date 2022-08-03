import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalWithAggregatesFilter } from "../inputs/DecimalWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ShapeSequenceScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ShapeSequenceScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ShapeSequenceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ShapeSequenceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShapeSequenceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ShapeSequenceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShapeSequenceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ShapeSequenceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  shapeId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalWithAggregatesFilter, {
    nullable: true
  })
  shapePtLat?: DecimalWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalWithAggregatesFilter, {
    nullable: true
  })
  shapePtLon?: DecimalWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  shapePtSequence?: IntWithAggregatesFilter | undefined;
}
