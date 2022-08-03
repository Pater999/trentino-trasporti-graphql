import * as TypeGraphQL from "type-graphql";
import { Calendar } from "../../../models/Calendar";
import { CalendarDate } from "../../../models/CalendarDate";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CalendarDate)
export class CalendarDateRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Calendar, {
    nullable: false
  })
  async service(@TypeGraphQL.Root() calendarDate: CalendarDate, @TypeGraphQL.Ctx() ctx: any): Promise<Calendar> {
    return getPrismaFromContext(ctx).calendarDate.findUnique({
      where: {
        serviceId_date: {
          serviceId: calendarDate.serviceId,
          date: calendarDate.date,
        },
      },
    }).service({});
  }
}
