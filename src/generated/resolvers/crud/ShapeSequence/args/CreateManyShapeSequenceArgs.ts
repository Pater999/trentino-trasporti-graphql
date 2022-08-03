import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShapeSequenceCreateManyInput } from "../../../inputs/ShapeSequenceCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyShapeSequenceArgs {
  @TypeGraphQL.Field(_type => [ShapeSequenceCreateManyInput], {
    nullable: false
  })
  data!: ShapeSequenceCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
