import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShapeSequenceWhereInput } from "../inputs/ShapeSequenceWhereInput";

@TypeGraphQL.InputType("ShapeSequenceListRelationFilter", {
  isAbstract: true
})
export class ShapeSequenceListRelationFilter {
  @TypeGraphQL.Field(_type => ShapeSequenceWhereInput, {
    nullable: true
  })
  every?: ShapeSequenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => ShapeSequenceWhereInput, {
    nullable: true
  })
  some?: ShapeSequenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => ShapeSequenceWhereInput, {
    nullable: true
  })
  none?: ShapeSequenceWhereInput | undefined;
}
