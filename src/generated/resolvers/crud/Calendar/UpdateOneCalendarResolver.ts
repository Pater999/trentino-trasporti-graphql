import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneCalendarArgs } from "./args/UpdateOneCalendarArgs";
import { Calendar } from "../../../models/Calendar";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Calendar)
export class UpdateOneCalendarResolver {
  @TypeGraphQL.Mutation(_returns => Calendar, {
    nullable: true
  })
  async updateOneCalendar(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneCalendarArgs): Promise<Calendar | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).calendar.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
