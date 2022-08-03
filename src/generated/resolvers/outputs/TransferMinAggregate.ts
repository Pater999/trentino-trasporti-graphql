import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("TransferMinAggregate", {
  isAbstract: true,
  simpleResolvers: true
})
export class TransferMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fromStopId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  toStopId!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  transferType!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  minTransferTime!: number | null;
}
