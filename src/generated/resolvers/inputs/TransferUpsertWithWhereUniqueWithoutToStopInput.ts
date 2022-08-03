import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransferCreateWithoutToStopInput } from "../inputs/TransferCreateWithoutToStopInput";
import { TransferUpdateWithoutToStopInput } from "../inputs/TransferUpdateWithoutToStopInput";
import { TransferWhereUniqueInput } from "../inputs/TransferWhereUniqueInput";

@TypeGraphQL.InputType("TransferUpsertWithWhereUniqueWithoutToStopInput", {
  isAbstract: true
})
export class TransferUpsertWithWhereUniqueWithoutToStopInput {
  @TypeGraphQL.Field(_type => TransferWhereUniqueInput, {
    nullable: false
  })
  where!: TransferWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransferUpdateWithoutToStopInput, {
    nullable: false
  })
  update!: TransferUpdateWithoutToStopInput;

  @TypeGraphQL.Field(_type => TransferCreateWithoutToStopInput, {
    nullable: false
  })
  create!: TransferCreateWithoutToStopInput;
}
