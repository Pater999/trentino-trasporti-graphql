import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateManyServiceInputEnvelope } from "../inputs/TripCreateManyServiceInputEnvelope";
import { TripCreateOrConnectWithoutServiceInput } from "../inputs/TripCreateOrConnectWithoutServiceInput";
import { TripCreateWithoutServiceInput } from "../inputs/TripCreateWithoutServiceInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripCreateNestedManyWithoutServiceInput", {
  isAbstract: true
})
export class TripCreateNestedManyWithoutServiceInput {
  @TypeGraphQL.Field(_type => [TripCreateWithoutServiceInput], {
    nullable: true
  })
  create?: TripCreateWithoutServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCreateOrConnectWithoutServiceInput], {
    nullable: true
  })
  connectOrCreate?: TripCreateOrConnectWithoutServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => TripCreateManyServiceInputEnvelope, {
    nullable: true
  })
  createMany?: TripCreateManyServiceInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TripWhereUniqueInput], {
    nullable: true
  })
  connect?: TripWhereUniqueInput[] | undefined;
}
