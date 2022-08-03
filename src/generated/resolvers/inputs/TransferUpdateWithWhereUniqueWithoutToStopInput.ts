import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransferUpdateWithoutToStopInput } from "../inputs/TransferUpdateWithoutToStopInput";
import { TransferWhereUniqueInput } from "../inputs/TransferWhereUniqueInput";

@TypeGraphQL.InputType("TransferUpdateWithWhereUniqueWithoutToStopInput", {
  isAbstract: true
})
export class TransferUpdateWithWhereUniqueWithoutToStopInput {
  @TypeGraphQL.Field(_type => TransferWhereUniqueInput, {
    nullable: false
  })
  where!: TransferWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransferUpdateWithoutToStopInput, {
    nullable: false
  })
  data!: TransferUpdateWithoutToStopInput;
}
