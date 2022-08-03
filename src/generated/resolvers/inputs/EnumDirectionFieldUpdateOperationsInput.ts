import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Direction } from "../../enums/Direction";

@TypeGraphQL.InputType("EnumDirectionFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumDirectionFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Direction, {
    nullable: true
  })
  set?: "WAY" | "RETURN" | undefined;
}
