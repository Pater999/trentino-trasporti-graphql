import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransferScalarWhereInput } from "../inputs/TransferScalarWhereInput";
import { TransferUpdateManyMutationInput } from "../inputs/TransferUpdateManyMutationInput";

@TypeGraphQL.InputType("TransferUpdateManyWithWhereWithoutToStopInput", {
  isAbstract: true
})
export class TransferUpdateManyWithWhereWithoutToStopInput {
  @TypeGraphQL.Field(_type => TransferScalarWhereInput, {
    nullable: false
  })
  where!: TransferScalarWhereInput;

  @TypeGraphQL.Field(_type => TransferUpdateManyMutationInput, {
    nullable: false
  })
  data!: TransferUpdateManyMutationInput;
}
