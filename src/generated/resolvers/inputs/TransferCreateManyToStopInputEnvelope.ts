import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransferCreateManyToStopInput } from "../inputs/TransferCreateManyToStopInput";

@TypeGraphQL.InputType("TransferCreateManyToStopInputEnvelope", {
  isAbstract: true
})
export class TransferCreateManyToStopInputEnvelope {
  @TypeGraphQL.Field(_type => [TransferCreateManyToStopInput], {
    nullable: false
  })
  data!: TransferCreateManyToStopInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
