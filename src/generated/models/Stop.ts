import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { StopTime } from "../models/StopTime";
import { Transfer } from "../models/Transfer";
import { RouteCategory } from "../enums/RouteCategory";
import { WheelchairAccessible } from "../enums/WheelchairAccessible";
import { StopCount } from "../resolvers/outputs/StopCount";

@TypeGraphQL.ObjectType("Stop", {
  isAbstract: true,
  simpleResolvers: true
})
export class Stop {
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
  zoneId?: number | null;

  @TypeGraphQL.Field(_type => WheelchairAccessible, {
    nullable: false
  })
  wheelchairBoarding!: "NO_INFO" | "YES" | "NO";

  transfersFrom?: Transfer[];

  transfersTo?: Transfer[];

  stopTimes?: StopTime[];

  @TypeGraphQL.Field(_type => RouteCategory, {
    nullable: false
  })
  category!: "URBAN" | "SUBURBAN";

  @TypeGraphQL.Field(_type => StopCount, {
    nullable: true
  })
  _count?: StopCount | null;
}
