import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransferWhereInput } from "../inputs/TransferWhereInput";

@TypeGraphQL.InputType("TransferListRelationFilter", {
  isAbstract: true
})
export class TransferListRelationFilter {
  @TypeGraphQL.Field(_type => TransferWhereInput, {
    nullable: true
  })
  every?: TransferWhereInput | undefined;

  @TypeGraphQL.Field(_type => TransferWhereInput, {
    nullable: true
  })
  some?: TransferWhereInput | undefined;

  @TypeGraphQL.Field(_type => TransferWhereInput, {
    nullable: true
  })
  none?: TransferWhereInput | undefined;
}
