import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TransferOrderByWithRelationInput } from "../../../inputs/TransferOrderByWithRelationInput";
import { TransferWhereInput } from "../../../inputs/TransferWhereInput";
import { TransferWhereUniqueInput } from "../../../inputs/TransferWhereUniqueInput";
import { TransferScalarFieldEnum } from "../../../../enums/TransferScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class StopTransfersFromArgs {
  @TypeGraphQL.Field(_type => TransferWhereInput, {
    nullable: true
  })
  where?: TransferWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TransferOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TransferOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TransferWhereUniqueInput, {
    nullable: true
  })
  cursor?: TransferWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TransferScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"fromStopId" | "toStopId" | "transferType" | "minTransferTime"> | undefined;
}
