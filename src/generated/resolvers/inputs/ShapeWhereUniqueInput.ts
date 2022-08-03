import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ShapeWhereUniqueInput", {
  isAbstract: true
})
export class ShapeWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shapeId?: string | undefined;
}
