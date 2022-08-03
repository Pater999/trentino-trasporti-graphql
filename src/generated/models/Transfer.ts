import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Stop } from "../models/Stop";

@TypeGraphQL.ObjectType("Transfer", {
  isAbstract: true,
  simpleResolvers: true
})
export class Transfer {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  fromStopId!: string;

  fromStop?: Stop;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  toStopId!: string;

  toStop?: Stop;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  transferType!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  minTransferTime!: number;
}
