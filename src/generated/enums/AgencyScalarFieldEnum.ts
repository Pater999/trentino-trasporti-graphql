import * as TypeGraphQL from "type-graphql";

export enum AgencyScalarFieldEnum {
  agencyId = "agencyId",
  agencyName = "agencyName",
  agencyUrl = "agencyUrl",
  agencyTimezone = "agencyTimezone",
  agencyPhone = "agencyPhone",
  agencyLang = "agencyLang"
}
TypeGraphQL.registerEnumType(AgencyScalarFieldEnum, {
  name: "AgencyScalarFieldEnum",
  description: undefined,
});
