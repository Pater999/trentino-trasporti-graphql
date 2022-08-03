import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShapeWhereInput } from "../inputs/ShapeWhereInput";

@TypeGraphQL.InputType("ShapeRelationFilter", {
  isAbstract: true
})
export class ShapeRelationFilter {
  @TypeGraphQL.Field(_type => ShapeWhereInput, {
    nullable: true
  })
  is?: ShapeWhereInput | undefined;

  @TypeGraphQL.Field(_type => ShapeWhereInput, {
    nullable: true
  })
  isNot?: ShapeWhereInput | undefined;
}
