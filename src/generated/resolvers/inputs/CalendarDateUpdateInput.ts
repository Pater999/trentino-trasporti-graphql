import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CalendarUpdateOneRequiredWithoutCalendarDatesNestedInput } from "../inputs/CalendarUpdateOneRequiredWithoutCalendarDatesNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CalendarDateUpdateInput", {
  isAbstract: true
})
export class CalendarDateUpdateInput {
  @TypeGraphQL.Field(_type => CalendarUpdateOneRequiredWithoutCalendarDatesNestedInput, {
    nullable: true
  })
  service?: CalendarUpdateOneRequiredWithoutCalendarDatesNestedInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  date?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  exceptionType?: BoolFieldUpdateOperationsInput | undefined;
}
