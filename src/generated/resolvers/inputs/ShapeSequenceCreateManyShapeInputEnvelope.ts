import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShapeSequenceCreateManyShapeInput } from "../inputs/ShapeSequenceCreateManyShapeInput";

@TypeGraphQL.InputType("ShapeSequenceCreateManyShapeInputEnvelope", {
  isAbstract: true
})
export class ShapeSequenceCreateManyShapeInputEnvelope {
  @TypeGraphQL.Field(_type => [ShapeSequenceCreateManyShapeInput], {
    nullable: false
  })
  data!: ShapeSequenceCreateManyShapeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
