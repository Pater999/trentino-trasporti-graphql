import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateManyRouteInput } from "../inputs/TripCreateManyRouteInput";

@TypeGraphQL.InputType("TripCreateManyRouteInputEnvelope", {
  isAbstract: true
})
export class TripCreateManyRouteInputEnvelope {
  @TypeGraphQL.Field(_type => [TripCreateManyRouteInput], {
    nullable: false
  })
  data!: TripCreateManyRouteInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
