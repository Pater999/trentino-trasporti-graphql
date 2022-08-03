import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripUpdateWithoutShapeInput } from "../inputs/TripUpdateWithoutShapeInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripUpdateWithWhereUniqueWithoutShapeInput", {
  isAbstract: true
})
export class TripUpdateWithWhereUniqueWithoutShapeInput {
  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: false
  })
  where!: TripWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripUpdateWithoutShapeInput, {
    nullable: false
  })
  data!: TripUpdateWithoutShapeInput;
}
