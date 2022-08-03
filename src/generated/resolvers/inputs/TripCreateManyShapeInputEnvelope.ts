import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateManyShapeInput } from "../inputs/TripCreateManyShapeInput";

@TypeGraphQL.InputType("TripCreateManyShapeInputEnvelope", {
  isAbstract: true
})
export class TripCreateManyShapeInputEnvelope {
  @TypeGraphQL.Field(_type => [TripCreateManyShapeInput], {
    nullable: false
  })
  data!: TripCreateManyShapeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
