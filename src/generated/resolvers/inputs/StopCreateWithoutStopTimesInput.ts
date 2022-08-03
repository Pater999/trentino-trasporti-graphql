import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransferCreateNestedManyWithoutFromStopInput } from "../inputs/TransferCreateNestedManyWithoutFromStopInput";
import { TransferCreateNestedManyWithoutToStopInput } from "../inputs/TransferCreateNestedManyWithoutToStopInput";
import { RouteCategory } from "../../enums/RouteCategory";
import { WheelchairAccessible } from "../../enums/WheelchairAccessible";

@TypeGraphQL.InputType("StopCreateWithoutStopTimesInput", {
  isAbstract: true
})
export class StopCreateWithoutStopTimesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  stopId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  stopCode!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  stopName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  stopDesc!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  stopLat!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  stopLon!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  zoneId?: number | undefined;

  @TypeGraphQL.Field(_type => WheelchairAccessible, {
    nullable: true
  })
  wheelchairBoarding?: "NO_INFO" | "YES" | "NO" | undefined;

  @TypeGraphQL.Field(_type => TransferCreateNestedManyWithoutFromStopInput, {
    nullable: true
  })
  transfersFrom?: TransferCreateNestedManyWithoutFromStopInput | undefined;

  @TypeGraphQL.Field(_type => TransferCreateNestedManyWithoutToStopInput, {
    nullable: true
  })
  transfersTo?: TransferCreateNestedManyWithoutToStopInput | undefined;

  @TypeGraphQL.Field(_type => RouteCategory, {
    nullable: true
  })
  category?: "URBAN" | "SUBURBAN" | undefined;
}
