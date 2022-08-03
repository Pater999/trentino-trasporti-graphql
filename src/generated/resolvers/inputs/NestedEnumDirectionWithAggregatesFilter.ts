import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumDirectionFilter } from "../inputs/NestedEnumDirectionFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Direction } from "../../enums/Direction";

@TypeGraphQL.InputType("NestedEnumDirectionWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumDirectionWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumDirectionWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumDirectionWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumDirectionFilter, {
    nullable: true
  })
  _min?: NestedEnumDirectionFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumDirectionFilter, {
    nullable: true
  })
  _max?: NestedEnumDirectionFilter | undefined;
}
