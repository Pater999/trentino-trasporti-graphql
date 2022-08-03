import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("CalendarMaxAggregate", {
  isAbstract: true,
  simpleResolvers: true
})
export class CalendarMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  serviceId!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  monday!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  tuesday!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  wednesday!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  thursday!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  friday!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  saturday!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  sunday!: boolean | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  startDate!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  endDate!: Date | null;
}
