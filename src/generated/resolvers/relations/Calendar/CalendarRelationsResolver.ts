import * as TypeGraphQL from "type-graphql";
import { Calendar } from "../../../models/Calendar";
import { CalendarDate } from "../../../models/CalendarDate";
import { Trip } from "../../../models/Trip";
import { CalendarCalendarDatesArgs } from "./args/CalendarCalendarDatesArgs";
import { CalendarTripsArgs } from "./args/CalendarTripsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Calendar)
export class CalendarRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [CalendarDate], {
    nullable: false
  })
  async calendarDates(@TypeGraphQL.Root() calendar: Calendar, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CalendarCalendarDatesArgs): Promise<CalendarDate[]> {
    return getPrismaFromContext(ctx).calendar.findUnique({
      where: {
        serviceId: calendar.serviceId,
      },
    }).calendarDates(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Trip], {
    nullable: false
  })
  async trips(@TypeGraphQL.Root() calendar: Calendar, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CalendarTripsArgs): Promise<Trip[]> {
    return getPrismaFromContext(ctx).calendar.findUnique({
      where: {
        serviceId: calendar.serviceId,
      },
    }).trips(args);
  }
}
