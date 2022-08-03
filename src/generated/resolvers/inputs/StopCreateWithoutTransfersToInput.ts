import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StopTimeCreateNestedManyWithoutStopInput } from "../inputs/StopTimeCreateNestedManyWithoutStopInput";
import { TransferCreateNestedManyWithoutFromStopInput } from "../inputs/TransferCreateNestedManyWithoutFromStopInput";
import { RouteCategory } from "../../enums/RouteCategory";
import { WheelchairAccessible } from "../../enums/WheelchairAccessible";

@TypeGraphQL.InputType("StopCreateWithoutTransfersToInput", {
  isAbstract: true
})
export class StopCreateWithoutTransfersToInput {
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

  @TypeGraphQL.Field(_type => StopTimeCreateNestedManyWithoutStopInput, {
    nullable: true
  })
  stopTimes?: StopTimeCreateNestedManyWithoutStopInput | undefined;

  @TypeGraphQL.Field(_type => RouteCategory, {
    nullable: true
  })
  category?: "URBAN" | "SUBURBAN" | undefined;
}
