import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransferUpdateWithoutFromStopInput } from "../inputs/TransferUpdateWithoutFromStopInput";
import { TransferWhereUniqueInput } from "../inputs/TransferWhereUniqueInput";

@TypeGraphQL.InputType("TransferUpdateWithWhereUniqueWithoutFromStopInput", {
  isAbstract: true
})
export class TransferUpdateWithWhereUniqueWithoutFromStopInput {
  @TypeGraphQL.Field(_type => TransferWhereUniqueInput, {
    nullable: false
  })
  where!: TransferWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransferUpdateWithoutFromStopInput, {
    nullable: false
  })
  data!: TransferUpdateWithoutFromStopInput;
}
