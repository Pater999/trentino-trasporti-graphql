import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneCalendarDateArgs } from "./args/UpsertOneCalendarDateArgs";
import { CalendarDate } from "../../../models/CalendarDate";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CalendarDate)
export class UpsertOneCalendarDateResolver {
  @TypeGraphQL.Mutation(_returns => CalendarDate, {
    nullable: false
  })
  async upsertOneCalendarDate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneCalendarDateArgs): Promise<CalendarDate> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).calendarDate.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
