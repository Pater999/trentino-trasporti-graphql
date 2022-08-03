import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RouteCategory } from "../../enums/RouteCategory";
import { WheelchairAccessible } from "../../enums/WheelchairAccessible";

@TypeGraphQL.ObjectType("StopMinAggregate", {
  isAbstract: true,
  simpleResolvers: true
})
export class StopMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  stopId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  stopCode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  stopName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  stopDesc!: string | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  stopLat!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  stopLon!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  zoneId!: number | null;

  @TypeGraphQL.Field(_type => WheelchairAccessible, {
    nullable: true
  })
  wheelchairBoarding!: "NO_INFO" | "YES" | "NO" | null;

  @TypeGraphQL.Field(_type => RouteCategory, {
    nullable: true
  })
  category!: "URBAN" | "SUBURBAN" | null;
}
