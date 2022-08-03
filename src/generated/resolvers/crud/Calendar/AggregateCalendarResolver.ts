import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCalendarArgs } from "./args/AggregateCalendarArgs";
import { Calendar } from "../../../models/Calendar";
import { AggregateCalendar } from "../../outputs/AggregateCalendar";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Calendar)
export class AggregateCalendarResolver {
  @TypeGraphQL.Query(_returns => AggregateCalendar, {
    nullable: false
  })
  async aggregateCalendar(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCalendarArgs): Promise<AggregateCalendar> {
    return getPrismaFromContext(ctx).calendar.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
