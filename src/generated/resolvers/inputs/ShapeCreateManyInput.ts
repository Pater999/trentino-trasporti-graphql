import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ShapeCreateManyInput", {
  isAbstract: true
})
export class ShapeCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shapeId!: string;
}
