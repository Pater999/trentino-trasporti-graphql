import * as TypeGraphQL from "type-graphql";

export enum TransferScalarFieldEnum {
  fromStopId = "fromStopId",
  toStopId = "toStopId",
  transferType = "transferType",
  minTransferTime = "minTransferTime"
}
TypeGraphQL.registerEnumType(TransferScalarFieldEnum, {
  name: "TransferScalarFieldEnum",
  description: undefined,
});
