import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstCalendarDateArgs } from "./args/FindFirstCalendarDateArgs";
import { CalendarDate } from "../../../models/CalendarDate";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CalendarDate)
export class FindFirstCalendarDateResolver {
  @TypeGraphQL.Query(_returns => CalendarDate, {
    nullable: true
  })
  async findFirstCalendarDate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCalendarDateArgs): Promise<CalendarDate | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).calendarDate.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
