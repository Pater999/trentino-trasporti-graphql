import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripScalarWhereInput } from "../inputs/TripScalarWhereInput";
import { TripUpdateManyMutationInput } from "../inputs/TripUpdateManyMutationInput";

@TypeGraphQL.InputType("TripUpdateManyWithWhereWithoutRouteInput", {
  isAbstract: true
})
export class TripUpdateManyWithWhereWithoutRouteInput {
  @TypeGraphQL.Field(_type => TripScalarWhereInput, {
    nullable: false
  })
  where!: TripScalarWhereInput;

  @TypeGraphQL.Field(_type => TripUpdateManyMutationInput, {
    nullable: false
  })
  data!: TripUpdateManyMutationInput;
}
