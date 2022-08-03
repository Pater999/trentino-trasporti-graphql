import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByCalendarDateArgs } from "./args/GroupByCalendarDateArgs";
import { CalendarDate } from "../../../models/CalendarDate";
import { CalendarDateGroupBy } from "../../outputs/CalendarDateGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CalendarDate)
export class GroupByCalendarDateResolver {
  @TypeGraphQL.Query(_returns => [CalendarDateGroupBy], {
    nullable: false
  })
  async groupByCalendarDate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCalendarDateArgs): Promise<CalendarDateGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).calendarDate.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
