import * as TypeGraphQL from "type-graphql";

export enum CalendarScalarFieldEnum {
  serviceId = "serviceId",
  monday = "monday",
  tuesday = "tuesday",
  wednesday = "wednesday",
  thursday = "thursday",
  friday = "friday",
  saturday = "saturday",
  sunday = "sunday",
  startDate = "startDate",
  endDate = "endDate"
}
TypeGraphQL.registerEnumType(CalendarScalarFieldEnum, {
  name: "CalendarScalarFieldEnum",
  description: undefined,
});
