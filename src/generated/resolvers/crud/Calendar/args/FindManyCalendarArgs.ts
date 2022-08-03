import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CalendarOrderByWithRelationInput } from "../../../inputs/CalendarOrderByWithRelationInput";
import { CalendarWhereInput } from "../../../inputs/CalendarWhereInput";
import { CalendarWhereUniqueInput } from "../../../inputs/CalendarWhereUniqueInput";
import { CalendarScalarFieldEnum } from "../../../../enums/CalendarScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCalendarArgs {
  @TypeGraphQL.Field(_type => CalendarWhereInput, {
    nullable: true
  })
  where?: CalendarWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CalendarOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CalendarOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CalendarWhereUniqueInput, {
    nullable: true
  })
  cursor?: CalendarWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CalendarScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"serviceId" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday" | "startDate" | "endDate"> | undefined;
}
