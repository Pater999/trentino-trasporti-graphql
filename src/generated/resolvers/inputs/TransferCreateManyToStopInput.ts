import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("TransferCreateManyToStopInput", {
  isAbstract: true
})
export class TransferCreateManyToStopInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  fromStopId!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  transferType!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  minTransferTime!: number;
}
