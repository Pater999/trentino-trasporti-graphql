import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripUpdateWithoutServiceInput } from "../inputs/TripUpdateWithoutServiceInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripUpdateWithWhereUniqueWithoutServiceInput", {
  isAbstract: true
})
export class TripUpdateWithWhereUniqueWithoutServiceInput {
  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: false
  })
  where!: TripWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripUpdateWithoutServiceInput, {
    nullable: false
  })
  data!: TripUpdateWithoutServiceInput;
}
