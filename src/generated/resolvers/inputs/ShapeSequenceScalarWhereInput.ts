import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ShapeSequenceScalarWhereInput", {
  isAbstract: true
})
export class ShapeSequenceScalarWhereInput {
  @TypeGraphQL.Field(_type => [ShapeSequenceScalarWhereInput], {
    nullable: true
  })
  AND?: ShapeSequenceScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShapeSequenceScalarWhereInput], {
    nullable: true
  })
  OR?: ShapeSequenceScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShapeSequenceScalarWhereInput], {
    nullable: true
  })
  NOT?: ShapeSequenceScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  shapeId?: StringFilter | undefined;

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
