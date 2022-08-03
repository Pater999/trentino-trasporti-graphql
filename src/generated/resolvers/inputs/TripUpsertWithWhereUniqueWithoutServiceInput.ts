import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateWithoutServiceInput } from "../inputs/TripCreateWithoutServiceInput";
import { TripUpdateWithoutServiceInput } from "../inputs/TripUpdateWithoutServiceInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripUpsertWithWhereUniqueWithoutServiceInput", {
  isAbstract: true
})
export class TripUpsertWithWhereUniqueWithoutServiceInput {
  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: false
  })
  where!: TripWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripUpdateWithoutServiceInput, {
    nullable: false
  })
  update!: TripUpdateWithoutServiceInput;

  @TypeGraphQL.Field(_type => TripCreateWithoutServiceInput, {
    nullable: false
  })
  create!: TripCreateWithoutServiceInput;
}
