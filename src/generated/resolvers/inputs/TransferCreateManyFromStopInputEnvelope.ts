import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransferCreateManyFromStopInput } from "../inputs/TransferCreateManyFromStopInput";

@TypeGraphQL.InputType("TransferCreateManyFromStopInputEnvelope", {
  isAbstract: true
})
export class TransferCreateManyFromStopInputEnvelope {
  @TypeGraphQL.Field(_type => [TransferCreateManyFromStopInput], {
    nullable: false
  })
  data!: TransferCreateManyFromStopInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
