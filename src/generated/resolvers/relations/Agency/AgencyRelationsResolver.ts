import * as TypeGraphQL from "type-graphql";
import { Agency } from "../../../models/Agency";
import { Route } from "../../../models/Route";
import { AgencyRoutesArgs } from "./args/AgencyRoutesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Agency)
export class AgencyRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Route], {
    nullable: false
  })
  async routes(@TypeGraphQL.Root() agency: Agency, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AgencyRoutesArgs): Promise<Route[]> {
    return getPrismaFromContext(ctx).agency.findUnique({
      where: {
        agencyId: agency.agencyId,
      },
    }).routes(args);
  }
}
