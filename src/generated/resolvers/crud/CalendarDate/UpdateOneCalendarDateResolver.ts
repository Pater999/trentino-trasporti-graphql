import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneCalendarDateArgs } from "./args/UpdateOneCalendarDateArgs";
import { CalendarDate } from "../../../models/CalendarDate";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CalendarDate)
export class UpdateOneCalendarDateResolver {
  @TypeGraphQL.Mutation(_returns => CalendarDate, {
    nullable: true
  })
  async updateOneCalendarDate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneCalendarDateArgs): Promise<CalendarDate | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).calendarDate.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
