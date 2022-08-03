import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TransferOrderByWithAggregationInput } from "../../../inputs/TransferOrderByWithAggregationInput";
import { TransferScalarWhereWithAggregatesInput } from "../../../inputs/TransferScalarWhereWithAggregatesInput";
import { TransferWhereInput } from "../../../inputs/TransferWhereInput";
import { TransferScalarFieldEnum } from "../../../../enums/TransferScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTransferArgs {
  @TypeGraphQL.Field(_type => TransferWhereInput, {
    nullable: true
  })
  where?: TransferWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TransferOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TransferOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransferScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"fromStopId" | "toStopId" | "transferType" | "minTransferTime">;

  @TypeGraphQL.Field(_type => TransferScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TransferScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
