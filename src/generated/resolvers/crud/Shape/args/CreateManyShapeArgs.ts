import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShapeCreateManyInput } from "../../../inputs/ShapeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyShapeArgs {
  @TypeGraphQL.Field(_type => [ShapeCreateManyInput], {
    nullable: false
  })
  data!: ShapeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
