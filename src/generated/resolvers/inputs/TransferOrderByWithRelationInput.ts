import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopOrderByWithRelationInput } from "../inputs/StopOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TransferOrderByWithRelationInput", {
  isAbstract: true
})
export class TransferOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  fromStopId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => StopOrderByWithRelationInput, {
    nullable: true
  })
  fromStop?: StopOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  toStopId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => StopOrderByWithRelationInput, {
    nullable: true
  })
  toStop?: StopOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  transferType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  minTransferTime?: "asc" | "desc" | undefined;
}
