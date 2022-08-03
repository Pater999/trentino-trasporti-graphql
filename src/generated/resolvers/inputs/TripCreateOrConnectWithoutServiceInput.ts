import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateWithoutServiceInput } from "../inputs/TripCreateWithoutServiceInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripCreateOrConnectWithoutServiceInput", {
  isAbstract: true
})
export class TripCreateOrConnectWithoutServiceInput {
  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: false
  })
  where!: TripWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripCreateWithoutServiceInput, {
    nullable: false
  })
  create!: TripCreateWithoutServiceInput;
}
