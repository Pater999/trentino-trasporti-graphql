import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("TransferScalarWhereInput", {
  isAbstract: true
})
export class TransferScalarWhereInput {
  @TypeGraphQL.Field(_type => [TransferScalarWhereInput], {
    nullable: true
  })
  AND?: TransferScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransferScalarWhereInput], {
    nullable: true
  })
  OR?: TransferScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransferScalarWhereInput], {
    nullable: true
  })
  NOT?: TransferScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  fromStopId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  toStopId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  transferType?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  minTransferTime?: IntFilter | undefined;
}
