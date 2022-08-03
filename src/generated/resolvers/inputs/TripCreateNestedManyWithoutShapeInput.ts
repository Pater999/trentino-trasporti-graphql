import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateManyShapeInputEnvelope } from "../inputs/TripCreateManyShapeInputEnvelope";
import { TripCreateOrConnectWithoutShapeInput } from "../inputs/TripCreateOrConnectWithoutShapeInput";
import { TripCreateWithoutShapeInput } from "../inputs/TripCreateWithoutShapeInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripCreateNestedManyWithoutShapeInput", {
  isAbstract: true
})
export class TripCreateNestedManyWithoutShapeInput {
  @TypeGraphQL.Field(_type => [TripCreateWithoutShapeInput], {
    nullable: true
  })
  create?: TripCreateWithoutShapeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCreateOrConnectWithoutShapeInput], {
    nullable: true
  })
  connectOrCreate?: TripCreateOrConnectWithoutShapeInput[] | undefined;

  @TypeGraphQL.Field(_type => TripCreateManyShapeInputEnvelope, {
    nullable: true
  })
  createMany?: TripCreateManyShapeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TripWhereUniqueInput], {
    nullable: true
  })
  connect?: TripWhereUniqueInput[] | undefined;
}
