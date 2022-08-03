import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransferAvgOrderByAggregateInput } from "../inputs/TransferAvgOrderByAggregateInput";
import { TransferCountOrderByAggregateInput } from "../inputs/TransferCountOrderByAggregateInput";
import { TransferMaxOrderByAggregateInput } from "../inputs/TransferMaxOrderByAggregateInput";
import { TransferMinOrderByAggregateInput } from "../inputs/TransferMinOrderByAggregateInput";
import { TransferSumOrderByAggregateInput } from "../inputs/TransferSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TransferOrderByWithAggregationInput", {
  isAbstract: true
})
export class TransferOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  fromStopId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  toStopId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  transferType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  minTransferTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TransferCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TransferCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TransferAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TransferAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TransferMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TransferMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TransferMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TransferMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TransferSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TransferSumOrderByAggregateInput | undefined;
}
