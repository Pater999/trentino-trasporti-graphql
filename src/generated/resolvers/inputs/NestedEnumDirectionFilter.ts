import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Direction } from "../../enums/Direction";

@TypeGraphQL.InputType("NestedEnumDirectionFilter", {
  isAbstract: true
})
export class NestedEnumDirectionFilter {
  @TypeGraphQL.Field(_type => Direction, {
    nullable: true
  })
  equals?: "WAY" | "RETURN" | undefined;

  @TypeGraphQL.Field(_type => [Direction], {
    nullable: true
  })
  in?: Array<"WAY" | "RETURN"> | undefined;

  @TypeGraphQL.Field(_type => [Direction], {
    nullable: true
  })
  notIn?: Array<"WAY" | "RETURN"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumDirectionFilter, {
    nullable: true
  })
  not?: NestedEnumDirectionFilter | undefined;
}
