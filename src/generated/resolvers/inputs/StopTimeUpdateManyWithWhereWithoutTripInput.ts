import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopTimeScalarWhereInput } from "../inputs/StopTimeScalarWhereInput";
import { StopTimeUpdateManyMutationInput } from "../inputs/StopTimeUpdateManyMutationInput";

@TypeGraphQL.InputType("StopTimeUpdateManyWithWhereWithoutTripInput", {
  isAbstract: true
})
export class StopTimeUpdateManyWithWhereWithoutTripInput {
  @TypeGraphQL.Field(_type => StopTimeScalarWhereInput, {
    nullable: false
  })
  where!: StopTimeScalarWhereInput;

  @TypeGraphQL.Field(_type => StopTimeUpdateManyMutationInput, {
    nullable: false
  })
  data!: StopTimeUpdateManyMutationInput;
}
