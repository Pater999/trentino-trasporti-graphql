import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateWithoutShapeInput } from "../inputs/TripCreateWithoutShapeInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripCreateOrConnectWithoutShapeInput", {
  isAbstract: true
})
export class TripCreateOrConnectWithoutShapeInput {
  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: false
  })
  where!: TripWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripCreateWithoutShapeInput, {
    nullable: false
  })
  create!: TripCreateWithoutShapeInput;
}
