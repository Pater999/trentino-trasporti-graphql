import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransferFromStopIdToStopIdCompoundUniqueInput } from "../inputs/TransferFromStopIdToStopIdCompoundUniqueInput";

@TypeGraphQL.InputType("TransferWhereUniqueInput", {
  isAbstract: true
})
export class TransferWhereUniqueInput {
  @TypeGraphQL.Field(_type => TransferFromStopIdToStopIdCompoundUniqueInput, {
    nullable: true
  })
  fromStopId_toStopId?: TransferFromStopIdToStopIdCompoundUniqueInput | undefined;
}
