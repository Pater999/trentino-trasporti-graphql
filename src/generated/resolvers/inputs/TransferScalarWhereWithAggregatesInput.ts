import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TransferScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TransferScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TransferScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TransferScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransferScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TransferScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransferScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TransferScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  fromStopId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  toStopId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  transferType?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  minTransferTime?: IntWithAggregatesFilter | undefined;
}
