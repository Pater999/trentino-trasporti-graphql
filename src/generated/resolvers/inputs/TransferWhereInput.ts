import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StopRelationFilter } from "../inputs/StopRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("TransferWhereInput", {
  isAbstract: true
})
export class TransferWhereInput {
  @TypeGraphQL.Field(_type => [TransferWhereInput], {
    nullable: true
  })
  AND?: TransferWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransferWhereInput], {
    nullable: true
  })
  OR?: TransferWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransferWhereInput], {
    nullable: true
  })
  NOT?: TransferWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  fromStopId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StopRelationFilter, {
    nullable: true
  })
  fromStop?: StopRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  toStopId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StopRelationFilter, {
    nullable: true
  })
  toStop?: StopRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  transferType?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  minTransferTime?: IntFilter | undefined;
}
