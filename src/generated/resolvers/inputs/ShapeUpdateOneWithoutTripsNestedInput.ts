import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShapeCreateOrConnectWithoutTripsInput } from "../inputs/ShapeCreateOrConnectWithoutTripsInput";
import { ShapeCreateWithoutTripsInput } from "../inputs/ShapeCreateWithoutTripsInput";
import { ShapeUpdateWithoutTripsInput } from "../inputs/ShapeUpdateWithoutTripsInput";
import { ShapeUpsertWithoutTripsInput } from "../inputs/ShapeUpsertWithoutTripsInput";
import { ShapeWhereUniqueInput } from "../inputs/ShapeWhereUniqueInput";

@TypeGraphQL.InputType("ShapeUpdateOneWithoutTripsNestedInput", {
  isAbstract: true
})
export class ShapeUpdateOneWithoutTripsNestedInput {
  @TypeGraphQL.Field(_type => ShapeCreateWithoutTripsInput, {
    nullable: true
  })
  create?: ShapeCreateWithoutTripsInput | undefined;

  @TypeGraphQL.Field(_type => ShapeCreateOrConnectWithoutTripsInput, {
    nullable: true
  })
  connectOrCreate?: ShapeCreateOrConnectWithoutTripsInput | undefined;

  @TypeGraphQL.Field(_type => ShapeUpsertWithoutTripsInput, {
    nullable: true
  })
  upsert?: ShapeUpsertWithoutTripsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ShapeWhereUniqueInput, {
    nullable: true
  })
  connect?: ShapeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ShapeUpdateWithoutTripsInput, {
    nullable: true
  })
  update?: ShapeUpdateWithoutTripsInput | undefined;
}
