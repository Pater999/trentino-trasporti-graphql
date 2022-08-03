import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("TransferFromStopIdToStopIdCompoundUniqueInput", {
  isAbstract: true
})
export class TransferFromStopIdToStopIdCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  fromStopId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  toStopId!: string;
}
