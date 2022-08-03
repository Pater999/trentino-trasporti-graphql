import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ShapeScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ShapeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ShapeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ShapeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShapeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ShapeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShapeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ShapeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  shapeId?: StringWithAggregatesFilter | undefined;
}
