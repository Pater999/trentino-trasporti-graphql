import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCalendarDateArgs } from "./args/AggregateCalendarDateArgs";
import { CalendarDate } from "../../../models/CalendarDate";
import { AggregateCalendarDate } from "../../outputs/AggregateCalendarDate";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CalendarDate)
export class AggregateCalendarDateResolver {
  @TypeGraphQL.Query(_returns => AggregateCalendarDate, {
    nullable: false
  })
  async aggregateCalendarDate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCalendarDateArgs): Promise<AggregateCalendarDate> {
    return getPrismaFromContext(ctx).calendarDate.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
