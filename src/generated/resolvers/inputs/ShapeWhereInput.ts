import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShapeSequenceListRelationFilter } from "../inputs/ShapeSequenceListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TripListRelationFilter } from "../inputs/TripListRelationFilter";

@TypeGraphQL.InputType("ShapeWhereInput", {
  isAbstract: true
})
export class ShapeWhereInput {
  @TypeGraphQL.Field(_type => [ShapeWhereInput], {
    nullable: true
  })
  AND?: ShapeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShapeWhereInput], {
    nullable: true
  })
  OR?: ShapeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShapeWhereInput], {
    nullable: true
  })
  NOT?: ShapeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  shapeId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => TripListRelationFilter, {
    nullable: true
  })
  trips?: TripListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ShapeSequenceListRelationFilter, {
    nullable: true
  })
  shapeSequences?: ShapeSequenceListRelationFilter | undefined;
}
