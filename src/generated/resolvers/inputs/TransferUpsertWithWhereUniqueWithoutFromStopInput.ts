import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransferCreateWithoutFromStopInput } from "../inputs/TransferCreateWithoutFromStopInput";
import { TransferUpdateWithoutFromStopInput } from "../inputs/TransferUpdateWithoutFromStopInput";
import { TransferWhereUniqueInput } from "../inputs/TransferWhereUniqueInput";

@TypeGraphQL.InputType("TransferUpsertWithWhereUniqueWithoutFromStopInput", {
  isAbstract: true
})
export class TransferUpsertWithWhereUniqueWithoutFromStopInput {
  @TypeGraphQL.Field(_type => TransferWhereUniqueInput, {
    nullable: false
  })
  where!: TransferWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransferUpdateWithoutFromStopInput, {
    nullable: false
  })
  update!: TransferUpdateWithoutFromStopInput;

  @TypeGraphQL.Field(_type => TransferCreateWithoutFromStopInput, {
    nullable: false
  })
  create!: TransferCreateWithoutFromStopInput;
}
