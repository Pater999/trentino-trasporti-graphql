import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Trip: crudResolvers.TripCrudResolver,
  Agency: crudResolvers.AgencyCrudResolver,
  Calendar: crudResolvers.CalendarCrudResolver,
  CalendarDate: crudResolvers.CalendarDateCrudResolver,
  Route: crudResolvers.RouteCrudResolver,
  Shape: crudResolvers.ShapeCrudResolver,
  ShapeSequence: crudResolvers.ShapeSequenceCrudResolver,
  StopTime: crudResolvers.StopTimeCrudResolver,
  Stop: crudResolvers.StopCrudResolver,
  Transfer: crudResolvers.TransferCrudResolver
};
const actionResolversMap = {
  Trip: {
    aggregateTrip: actionResolvers.AggregateTripResolver,
    createManyTrip: actionResolvers.CreateManyTripResolver,
    createOneTrip: actionResolvers.CreateOneTripResolver,
    deleteManyTrip: actionResolvers.DeleteManyTripResolver,
    deleteOneTrip: actionResolvers.DeleteOneTripResolver,
    findFirstTrip: actionResolvers.FindFirstTripResolver,
    trips: actionResolvers.FindManyTripResolver,
    trip: actionResolvers.FindUniqueTripResolver,
    groupByTrip: actionResolvers.GroupByTripResolver,
    updateManyTrip: actionResolvers.UpdateManyTripResolver,
    updateOneTrip: actionResolvers.UpdateOneTripResolver,
    upsertOneTrip: actionResolvers.UpsertOneTripResolver
  },
  Agency: {
    aggregateAgency: actionResolvers.AggregateAgencyResolver,
    createManyAgency: actionResolvers.CreateManyAgencyResolver,
    createOneAgency: actionResolvers.CreateOneAgencyResolver,
    deleteManyAgency: actionResolvers.DeleteManyAgencyResolver,
    deleteOneAgency: actionResolvers.DeleteOneAgencyResolver,
    findFirstAgency: actionResolvers.FindFirstAgencyResolver,
    agencies: actionResolvers.FindManyAgencyResolver,
    agency: actionResolvers.FindUniqueAgencyResolver,
    groupByAgency: actionResolvers.GroupByAgencyResolver,
    updateManyAgency: actionResolvers.UpdateManyAgencyResolver,
    updateOneAgency: actionResolvers.UpdateOneAgencyResolver,
    upsertOneAgency: actionResolvers.UpsertOneAgencyResolver
  },
  Calendar: {
    aggregateCalendar: actionResolvers.AggregateCalendarResolver,
    createManyCalendar: actionResolvers.CreateManyCalendarResolver,
    createOneCalendar: actionResolvers.CreateOneCalendarResolver,
    deleteManyCalendar: actionResolvers.DeleteManyCalendarResolver,
    deleteOneCalendar: actionResolvers.DeleteOneCalendarResolver,
    findFirstCalendar: actionResolvers.FindFirstCalendarResolver,
    calendars: actionResolvers.FindManyCalendarResolver,
    calendar: actionResolvers.FindUniqueCalendarResolver,
    groupByCalendar: actionResolvers.GroupByCalendarResolver,
    updateManyCalendar: actionResolvers.UpdateManyCalendarResolver,
    updateOneCalendar: actionResolvers.UpdateOneCalendarResolver,
    upsertOneCalendar: actionResolvers.UpsertOneCalendarResolver
  },
  CalendarDate: {
    aggregateCalendarDate: actionResolvers.AggregateCalendarDateResolver,
    createManyCalendarDate: actionResolvers.CreateManyCalendarDateResolver,
    createOneCalendarDate: actionResolvers.CreateOneCalendarDateResolver,
    deleteManyCalendarDate: actionResolvers.DeleteManyCalendarDateResolver,
    deleteOneCalendarDate: actionResolvers.DeleteOneCalendarDateResolver,
    findFirstCalendarDate: actionResolvers.FindFirstCalendarDateResolver,
    calendarDates: actionResolvers.FindManyCalendarDateResolver,
    calendarDate: actionResolvers.FindUniqueCalendarDateResolver,
    groupByCalendarDate: actionResolvers.GroupByCalendarDateResolver,
    updateManyCalendarDate: actionResolvers.UpdateManyCalendarDateResolver,
    updateOneCalendarDate: actionResolvers.UpdateOneCalendarDateResolver,
    upsertOneCalendarDate: actionResolvers.UpsertOneCalendarDateResolver
  },
  Route: {
    aggregateRoute: actionResolvers.AggregateRouteResolver,
    createManyRoute: actionResolvers.CreateManyRouteResolver,
    createOneRoute: actionResolvers.CreateOneRouteResolver,
    deleteManyRoute: actionResolvers.DeleteManyRouteResolver,
    deleteOneRoute: actionResolvers.DeleteOneRouteResolver,
    findFirstRoute: actionResolvers.FindFirstRouteResolver,
    routes: actionResolvers.FindManyRouteResolver,
    route: actionResolvers.FindUniqueRouteResolver,
    groupByRoute: actionResolvers.GroupByRouteResolver,
    updateManyRoute: actionResolvers.UpdateManyRouteResolver,
    updateOneRoute: actionResolvers.UpdateOneRouteResolver,
    upsertOneRoute: actionResolvers.UpsertOneRouteResolver
  },
  Shape: {
    aggregateShape: actionResolvers.AggregateShapeResolver,
    createManyShape: actionResolvers.CreateManyShapeResolver,
    createOneShape: actionResolvers.CreateOneShapeResolver,
    deleteManyShape: actionResolvers.DeleteManyShapeResolver,
    deleteOneShape: actionResolvers.DeleteOneShapeResolver,
    findFirstShape: actionResolvers.FindFirstShapeResolver,
    shapes: actionResolvers.FindManyShapeResolver,
    shape: actionResolvers.FindUniqueShapeResolver,
    groupByShape: actionResolvers.GroupByShapeResolver,
    updateManyShape: actionResolvers.UpdateManyShapeResolver,
    updateOneShape: actionResolvers.UpdateOneShapeResolver,
    upsertOneShape: actionResolvers.UpsertOneShapeResolver
  },
  ShapeSequence: {
    aggregateShapeSequence: actionResolvers.AggregateShapeSequenceResolver,
    createManyShapeSequence: actionResolvers.CreateManyShapeSequenceResolver,
    createOneShapeSequence: actionResolvers.CreateOneShapeSequenceResolver,
    deleteManyShapeSequence: actionResolvers.DeleteManyShapeSequenceResolver,
    deleteOneShapeSequence: actionResolvers.DeleteOneShapeSequenceResolver,
    findFirstShapeSequence: actionResolvers.FindFirstShapeSequenceResolver,
    shapeSequences: actionResolvers.FindManyShapeSequenceResolver,
    shapeSequence: actionResolvers.FindUniqueShapeSequenceResolver,
    groupByShapeSequence: actionResolvers.GroupByShapeSequenceResolver,
    updateManyShapeSequence: actionResolvers.UpdateManyShapeSequenceResolver,
    updateOneShapeSequence: actionResolvers.UpdateOneShapeSequenceResolver,
    upsertOneShapeSequence: actionResolvers.UpsertOneShapeSequenceResolver
  },
  StopTime: {
    aggregateStopTime: actionResolvers.AggregateStopTimeResolver,
    createManyStopTime: actionResolvers.CreateManyStopTimeResolver,
    createOneStopTime: actionResolvers.CreateOneStopTimeResolver,
    deleteManyStopTime: actionResolvers.DeleteManyStopTimeResolver,
    deleteOneStopTime: actionResolvers.DeleteOneStopTimeResolver,
    findFirstStopTime: actionResolvers.FindFirstStopTimeResolver,
    stopTimes: actionResolvers.FindManyStopTimeResolver,
    stopTime: actionResolvers.FindUniqueStopTimeResolver,
    groupByStopTime: actionResolvers.GroupByStopTimeResolver,
    updateManyStopTime: actionResolvers.UpdateManyStopTimeResolver,
    updateOneStopTime: actionResolvers.UpdateOneStopTimeResolver,
    upsertOneStopTime: actionResolvers.UpsertOneStopTimeResolver
  },
  Stop: {
    aggregateStop: actionResolvers.AggregateStopResolver,
    createManyStop: actionResolvers.CreateManyStopResolver,
    createOneStop: actionResolvers.CreateOneStopResolver,
    deleteManyStop: actionResolvers.DeleteManyStopResolver,
    deleteOneStop: actionResolvers.DeleteOneStopResolver,
    findFirstStop: actionResolvers.FindFirstStopResolver,
    stops: actionResolvers.FindManyStopResolver,
    stop: actionResolvers.FindUniqueStopResolver,
    groupByStop: actionResolvers.GroupByStopResolver,
    updateManyStop: actionResolvers.UpdateManyStopResolver,
    updateOneStop: actionResolvers.UpdateOneStopResolver,
    upsertOneStop: actionResolvers.UpsertOneStopResolver
  },
  Transfer: {
    aggregateTransfer: actionResolvers.AggregateTransferResolver,
    createManyTransfer: actionResolvers.CreateManyTransferResolver,
    createOneTransfer: actionResolvers.CreateOneTransferResolver,
    deleteManyTransfer: actionResolvers.DeleteManyTransferResolver,
    deleteOneTransfer: actionResolvers.DeleteOneTransferResolver,
    findFirstTransfer: actionResolvers.FindFirstTransferResolver,
    transfers: actionResolvers.FindManyTransferResolver,
    transfer: actionResolvers.FindUniqueTransferResolver,
    groupByTransfer: actionResolvers.GroupByTransferResolver,
    updateManyTransfer: actionResolvers.UpdateManyTransferResolver,
    updateOneTransfer: actionResolvers.UpdateOneTransferResolver,
    upsertOneTransfer: actionResolvers.UpsertOneTransferResolver
  }
};
const crudResolversInfo = {
  Trip: ["aggregateTrip", "createManyTrip", "createOneTrip", "deleteManyTrip", "deleteOneTrip", "findFirstTrip", "trips", "trip", "groupByTrip", "updateManyTrip", "updateOneTrip", "upsertOneTrip"],
  Agency: ["aggregateAgency", "createManyAgency", "createOneAgency", "deleteManyAgency", "deleteOneAgency", "findFirstAgency", "agencies", "agency", "groupByAgency", "updateManyAgency", "updateOneAgency", "upsertOneAgency"],
  Calendar: ["aggregateCalendar", "createManyCalendar", "createOneCalendar", "deleteManyCalendar", "deleteOneCalendar", "findFirstCalendar", "calendars", "calendar", "groupByCalendar", "updateManyCalendar", "updateOneCalendar", "upsertOneCalendar"],
  CalendarDate: ["aggregateCalendarDate", "createManyCalendarDate", "createOneCalendarDate", "deleteManyCalendarDate", "deleteOneCalendarDate", "findFirstCalendarDate", "calendarDates", "calendarDate", "groupByCalendarDate", "updateManyCalendarDate", "updateOneCalendarDate", "upsertOneCalendarDate"],
  Route: ["aggregateRoute", "createManyRoute", "createOneRoute", "deleteManyRoute", "deleteOneRoute", "findFirstRoute", "routes", "route", "groupByRoute", "updateManyRoute", "updateOneRoute", "upsertOneRoute"],
  Shape: ["aggregateShape", "createManyShape", "createOneShape", "deleteManyShape", "deleteOneShape", "findFirstShape", "shapes", "shape", "groupByShape", "updateManyShape", "updateOneShape", "upsertOneShape"],
  ShapeSequence: ["aggregateShapeSequence", "createManyShapeSequence", "createOneShapeSequence", "deleteManyShapeSequence", "deleteOneShapeSequence", "findFirstShapeSequence", "shapeSequences", "shapeSequence", "groupByShapeSequence", "updateManyShapeSequence", "updateOneShapeSequence", "upsertOneShapeSequence"],
  StopTime: ["aggregateStopTime", "createManyStopTime", "createOneStopTime", "deleteManyStopTime", "deleteOneStopTime", "findFirstStopTime", "stopTimes", "stopTime", "groupByStopTime", "updateManyStopTime", "updateOneStopTime", "upsertOneStopTime"],
  Stop: ["aggregateStop", "createManyStop", "createOneStop", "deleteManyStop", "deleteOneStop", "findFirstStop", "stops", "stop", "groupByStop", "updateManyStop", "updateOneStop", "upsertOneStop"],
  Transfer: ["aggregateTransfer", "createManyTransfer", "createOneTransfer", "deleteManyTransfer", "deleteOneTransfer", "findFirstTransfer", "transfers", "transfer", "groupByTransfer", "updateManyTransfer", "updateOneTransfer", "upsertOneTransfer"]
};
const argsInfo = {
  AggregateTripArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTripArgs: ["data", "skipDuplicates"],
  CreateOneTripArgs: ["data"],
  DeleteManyTripArgs: ["where"],
  DeleteOneTripArgs: ["where"],
  FindFirstTripArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTripArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTripArgs: ["where"],
  GroupByTripArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTripArgs: ["data", "where"],
  UpdateOneTripArgs: ["data", "where"],
  UpsertOneTripArgs: ["where", "create", "update"],
  AggregateAgencyArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyAgencyArgs: ["data", "skipDuplicates"],
  CreateOneAgencyArgs: ["data"],
  DeleteManyAgencyArgs: ["where"],
  DeleteOneAgencyArgs: ["where"],
  FindFirstAgencyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAgencyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueAgencyArgs: ["where"],
  GroupByAgencyArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyAgencyArgs: ["data", "where"],
  UpdateOneAgencyArgs: ["data", "where"],
  UpsertOneAgencyArgs: ["where", "create", "update"],
  AggregateCalendarArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCalendarArgs: ["data", "skipDuplicates"],
  CreateOneCalendarArgs: ["data"],
  DeleteManyCalendarArgs: ["where"],
  DeleteOneCalendarArgs: ["where"],
  FindFirstCalendarArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCalendarArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCalendarArgs: ["where"],
  GroupByCalendarArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCalendarArgs: ["data", "where"],
  UpdateOneCalendarArgs: ["data", "where"],
  UpsertOneCalendarArgs: ["where", "create", "update"],
  AggregateCalendarDateArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCalendarDateArgs: ["data", "skipDuplicates"],
  CreateOneCalendarDateArgs: ["data"],
  DeleteManyCalendarDateArgs: ["where"],
  DeleteOneCalendarDateArgs: ["where"],
  FindFirstCalendarDateArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCalendarDateArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCalendarDateArgs: ["where"],
  GroupByCalendarDateArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCalendarDateArgs: ["data", "where"],
  UpdateOneCalendarDateArgs: ["data", "where"],
  UpsertOneCalendarDateArgs: ["where", "create", "update"],
  AggregateRouteArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyRouteArgs: ["data", "skipDuplicates"],
  CreateOneRouteArgs: ["data"],
  DeleteManyRouteArgs: ["where"],
  DeleteOneRouteArgs: ["where"],
  FindFirstRouteArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyRouteArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueRouteArgs: ["where"],
  GroupByRouteArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyRouteArgs: ["data", "where"],
  UpdateOneRouteArgs: ["data", "where"],
  UpsertOneRouteArgs: ["where", "create", "update"],
  AggregateShapeArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyShapeArgs: ["data", "skipDuplicates"],
  CreateOneShapeArgs: ["data"],
  DeleteManyShapeArgs: ["where"],
  DeleteOneShapeArgs: ["where"],
  FindFirstShapeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyShapeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueShapeArgs: ["where"],
  GroupByShapeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyShapeArgs: ["data", "where"],
  UpdateOneShapeArgs: ["data", "where"],
  UpsertOneShapeArgs: ["where", "create", "update"],
  AggregateShapeSequenceArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyShapeSequenceArgs: ["data", "skipDuplicates"],
  CreateOneShapeSequenceArgs: ["data"],
  DeleteManyShapeSequenceArgs: ["where"],
  DeleteOneShapeSequenceArgs: ["where"],
  FindFirstShapeSequenceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyShapeSequenceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueShapeSequenceArgs: ["where"],
  GroupByShapeSequenceArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyShapeSequenceArgs: ["data", "where"],
  UpdateOneShapeSequenceArgs: ["data", "where"],
  UpsertOneShapeSequenceArgs: ["where", "create", "update"],
  AggregateStopTimeArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyStopTimeArgs: ["data", "skipDuplicates"],
  CreateOneStopTimeArgs: ["data"],
  DeleteManyStopTimeArgs: ["where"],
  DeleteOneStopTimeArgs: ["where"],
  FindFirstStopTimeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyStopTimeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueStopTimeArgs: ["where"],
  GroupByStopTimeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyStopTimeArgs: ["data", "where"],
  UpdateOneStopTimeArgs: ["data", "where"],
  UpsertOneStopTimeArgs: ["where", "create", "update"],
  AggregateStopArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyStopArgs: ["data", "skipDuplicates"],
  CreateOneStopArgs: ["data"],
  DeleteManyStopArgs: ["where"],
  DeleteOneStopArgs: ["where"],
  FindFirstStopArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyStopArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueStopArgs: ["where"],
  GroupByStopArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyStopArgs: ["data", "where"],
  UpdateOneStopArgs: ["data", "where"],
  UpsertOneStopArgs: ["where", "create", "update"],
  AggregateTransferArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTransferArgs: ["data", "skipDuplicates"],
  CreateOneTransferArgs: ["data"],
  DeleteManyTransferArgs: ["where"],
  DeleteOneTransferArgs: ["where"],
  FindFirstTransferArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTransferArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTransferArgs: ["where"],
  GroupByTransferArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTransferArgs: ["data", "where"],
  UpdateOneTransferArgs: ["data", "where"],
  UpsertOneTransferArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Trip: relationResolvers.TripRelationsResolver,
  Agency: relationResolvers.AgencyRelationsResolver,
  Calendar: relationResolvers.CalendarRelationsResolver,
  CalendarDate: relationResolvers.CalendarDateRelationsResolver,
  Route: relationResolvers.RouteRelationsResolver,
  Shape: relationResolvers.ShapeRelationsResolver,
  ShapeSequence: relationResolvers.ShapeSequenceRelationsResolver,
  StopTime: relationResolvers.StopTimeRelationsResolver,
  Stop: relationResolvers.StopRelationsResolver,
  Transfer: relationResolvers.TransferRelationsResolver
};
const relationResolversInfo = {
  Trip: ["route", "service", "shape", "stopTimes"],
  Agency: ["routes"],
  Calendar: ["calendarDates", "trips"],
  CalendarDate: ["service"],
  Route: ["agency", "trips"],
  Shape: ["trips", "shapeSequences"],
  ShapeSequence: ["shape"],
  StopTime: ["trip", "stop"],
  Stop: ["transfersFrom", "transfersTo", "stopTimes"],
  Transfer: ["fromStop", "toStop"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Trip: ["tripId", "routeId", "category", "serviceId", "tripHeadsign", "directionId", "shapeId", "wheelchairAccessible"],
  Agency: ["agencyId", "agencyName", "agencyUrl", "agencyTimezone", "agencyPhone", "agencyLang"],
  Calendar: ["serviceId", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "startDate", "endDate"],
  CalendarDate: ["serviceId", "date", "exceptionType"],
  Route: ["routeId", "agencyId", "routeShortName", "routeLongName", "routeType", "routeColor", "routeTextColor", "category"],
  Shape: ["shapeId"],
  ShapeSequence: ["shapeId", "shapePtLat", "shapePtLon", "shapePtSequence"],
  StopTime: ["tripId", "arrivalTime", "departureTime", "stopId", "stopSequence"],
  Stop: ["stopId", "stopCode", "stopName", "stopDesc", "stopLat", "stopLon", "zoneId", "wheelchairBoarding", "category"],
  Transfer: ["fromStopId", "toStopId", "transferType", "minTransferTime"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateTrip: ["_count", "_min", "_max"],
  TripGroupBy: ["tripId", "routeId", "category", "serviceId", "tripHeadsign", "directionId", "shapeId", "wheelchairAccessible", "_count", "_min", "_max"],
  AggregateAgency: ["_count", "_avg", "_sum", "_min", "_max"],
  AgencyGroupBy: ["agencyId", "agencyName", "agencyUrl", "agencyTimezone", "agencyPhone", "agencyLang", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCalendar: ["_count", "_min", "_max"],
  CalendarGroupBy: ["serviceId", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "startDate", "endDate", "_count", "_min", "_max"],
  AggregateCalendarDate: ["_count", "_min", "_max"],
  CalendarDateGroupBy: ["serviceId", "date", "exceptionType", "_count", "_min", "_max"],
  AggregateRoute: ["_count", "_avg", "_sum", "_min", "_max"],
  RouteGroupBy: ["routeId", "agencyId", "routeShortName", "routeLongName", "routeType", "routeColor", "routeTextColor", "category", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateShape: ["_count", "_min", "_max"],
  ShapeGroupBy: ["shapeId", "_count", "_min", "_max"],
  AggregateShapeSequence: ["_count", "_avg", "_sum", "_min", "_max"],
  ShapeSequenceGroupBy: ["shapeId", "shapePtLat", "shapePtLon", "shapePtSequence", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateStopTime: ["_count", "_avg", "_sum", "_min", "_max"],
  StopTimeGroupBy: ["tripId", "arrivalTime", "departureTime", "stopId", "stopSequence", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateStop: ["_count", "_avg", "_sum", "_min", "_max"],
  StopGroupBy: ["stopId", "stopCode", "stopName", "stopDesc", "stopLat", "stopLon", "zoneId", "wheelchairBoarding", "category", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTransfer: ["_count", "_avg", "_sum", "_min", "_max"],
  TransferGroupBy: ["fromStopId", "toStopId", "transferType", "minTransferTime", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  TripCount: ["stopTimes"],
  TripCountAggregate: ["tripId", "routeId", "category", "serviceId", "tripHeadsign", "directionId", "shapeId", "wheelchairAccessible", "_all"],
  TripMinAggregate: ["tripId", "routeId", "category", "serviceId", "tripHeadsign", "directionId", "shapeId", "wheelchairAccessible"],
  TripMaxAggregate: ["tripId", "routeId", "category", "serviceId", "tripHeadsign", "directionId", "shapeId", "wheelchairAccessible"],
  AgencyCount: ["routes"],
  AgencyCountAggregate: ["agencyId", "agencyName", "agencyUrl", "agencyTimezone", "agencyPhone", "agencyLang", "_all"],
  AgencyAvgAggregate: ["agencyId"],
  AgencySumAggregate: ["agencyId"],
  AgencyMinAggregate: ["agencyId", "agencyName", "agencyUrl", "agencyTimezone", "agencyPhone", "agencyLang"],
  AgencyMaxAggregate: ["agencyId", "agencyName", "agencyUrl", "agencyTimezone", "agencyPhone", "agencyLang"],
  CalendarCount: ["calendarDates", "trips"],
  CalendarCountAggregate: ["serviceId", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "startDate", "endDate", "_all"],
  CalendarMinAggregate: ["serviceId", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "startDate", "endDate"],
  CalendarMaxAggregate: ["serviceId", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "startDate", "endDate"],
  CalendarDateCountAggregate: ["serviceId", "date", "exceptionType", "_all"],
  CalendarDateMinAggregate: ["serviceId", "date", "exceptionType"],
  CalendarDateMaxAggregate: ["serviceId", "date", "exceptionType"],
  RouteCount: ["trips"],
  RouteCountAggregate: ["routeId", "agencyId", "routeShortName", "routeLongName", "routeType", "routeColor", "routeTextColor", "category", "_all"],
  RouteAvgAggregate: ["agencyId"],
  RouteSumAggregate: ["agencyId"],
  RouteMinAggregate: ["routeId", "agencyId", "routeShortName", "routeLongName", "routeType", "routeColor", "routeTextColor", "category"],
  RouteMaxAggregate: ["routeId", "agencyId", "routeShortName", "routeLongName", "routeType", "routeColor", "routeTextColor", "category"],
  ShapeCount: ["trips", "shapeSequences"],
  ShapeCountAggregate: ["shapeId", "_all"],
  ShapeMinAggregate: ["shapeId"],
  ShapeMaxAggregate: ["shapeId"],
  ShapeSequenceCountAggregate: ["shapeId", "shapePtLat", "shapePtLon", "shapePtSequence", "_all"],
  ShapeSequenceAvgAggregate: ["shapePtLat", "shapePtLon", "shapePtSequence"],
  ShapeSequenceSumAggregate: ["shapePtLat", "shapePtLon", "shapePtSequence"],
  ShapeSequenceMinAggregate: ["shapeId", "shapePtLat", "shapePtLon", "shapePtSequence"],
  ShapeSequenceMaxAggregate: ["shapeId", "shapePtLat", "shapePtLon", "shapePtSequence"],
  StopTimeCountAggregate: ["tripId", "arrivalTime", "departureTime", "stopId", "stopSequence", "_all"],
  StopTimeAvgAggregate: ["stopSequence"],
  StopTimeSumAggregate: ["stopSequence"],
  StopTimeMinAggregate: ["tripId", "arrivalTime", "departureTime", "stopId", "stopSequence"],
  StopTimeMaxAggregate: ["tripId", "arrivalTime", "departureTime", "stopId", "stopSequence"],
  StopCount: ["transfersFrom", "transfersTo", "stopTimes"],
  StopCountAggregate: ["stopId", "stopCode", "stopName", "stopDesc", "stopLat", "stopLon", "zoneId", "wheelchairBoarding", "category", "_all"],
  StopAvgAggregate: ["stopLat", "stopLon", "zoneId"],
  StopSumAggregate: ["stopLat", "stopLon", "zoneId"],
  StopMinAggregate: ["stopId", "stopCode", "stopName", "stopDesc", "stopLat", "stopLon", "zoneId", "wheelchairBoarding", "category"],
  StopMaxAggregate: ["stopId", "stopCode", "stopName", "stopDesc", "stopLat", "stopLon", "zoneId", "wheelchairBoarding", "category"],
  TransferCountAggregate: ["fromStopId", "toStopId", "transferType", "minTransferTime", "_all"],
  TransferAvgAggregate: ["transferType", "minTransferTime"],
  TransferSumAggregate: ["transferType", "minTransferTime"],
  TransferMinAggregate: ["fromStopId", "toStopId", "transferType", "minTransferTime"],
  TransferMaxAggregate: ["fromStopId", "toStopId", "transferType", "minTransferTime"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  TripWhereInput: ["AND", "OR", "NOT", "tripId", "routeId", "route", "category", "serviceId", "service", "tripHeadsign", "directionId", "shapeId", "shape", "wheelchairAccessible", "stopTimes"],
  TripOrderByWithRelationInput: ["tripId", "routeId", "route", "category", "serviceId", "service", "tripHeadsign", "directionId", "shapeId", "shape", "wheelchairAccessible", "stopTimes"],
  TripWhereUniqueInput: ["tripId"],
  TripOrderByWithAggregationInput: ["tripId", "routeId", "category", "serviceId", "tripHeadsign", "directionId", "shapeId", "wheelchairAccessible", "_count", "_max", "_min"],
  TripScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "tripId", "routeId", "category", "serviceId", "tripHeadsign", "directionId", "shapeId", "wheelchairAccessible"],
  AgencyWhereInput: ["AND", "OR", "NOT", "agencyId", "agencyName", "agencyUrl", "agencyTimezone", "agencyPhone", "agencyLang", "routes"],
  AgencyOrderByWithRelationInput: ["agencyId", "agencyName", "agencyUrl", "agencyTimezone", "agencyPhone", "agencyLang", "routes"],
  AgencyWhereUniqueInput: ["agencyId"],
  AgencyOrderByWithAggregationInput: ["agencyId", "agencyName", "agencyUrl", "agencyTimezone", "agencyPhone", "agencyLang", "_count", "_avg", "_max", "_min", "_sum"],
  AgencyScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "agencyId", "agencyName", "agencyUrl", "agencyTimezone", "agencyPhone", "agencyLang"],
  CalendarWhereInput: ["AND", "OR", "NOT", "serviceId", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "startDate", "endDate", "calendarDates", "trips"],
  CalendarOrderByWithRelationInput: ["serviceId", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "startDate", "endDate", "calendarDates", "trips"],
  CalendarWhereUniqueInput: ["serviceId"],
  CalendarOrderByWithAggregationInput: ["serviceId", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "startDate", "endDate", "_count", "_max", "_min"],
  CalendarScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "serviceId", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "startDate", "endDate"],
  CalendarDateWhereInput: ["AND", "OR", "NOT", "serviceId", "service", "date", "exceptionType"],
  CalendarDateOrderByWithRelationInput: ["serviceId", "service", "date", "exceptionType"],
  CalendarDateWhereUniqueInput: ["serviceId_date"],
  CalendarDateOrderByWithAggregationInput: ["serviceId", "date", "exceptionType", "_count", "_max", "_min"],
  CalendarDateScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "serviceId", "date", "exceptionType"],
  RouteWhereInput: ["AND", "OR", "NOT", "routeId", "agencyId", "agency", "routeShortName", "routeLongName", "routeType", "routeColor", "routeTextColor", "trips", "category"],
  RouteOrderByWithRelationInput: ["routeId", "agencyId", "agency", "routeShortName", "routeLongName", "routeType", "routeColor", "routeTextColor", "trips", "category"],
  RouteWhereUniqueInput: ["routeId"],
  RouteOrderByWithAggregationInput: ["routeId", "agencyId", "routeShortName", "routeLongName", "routeType", "routeColor", "routeTextColor", "category", "_count", "_avg", "_max", "_min", "_sum"],
  RouteScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "routeId", "agencyId", "routeShortName", "routeLongName", "routeType", "routeColor", "routeTextColor", "category"],
  ShapeWhereInput: ["AND", "OR", "NOT", "shapeId", "trips", "shapeSequences"],
  ShapeOrderByWithRelationInput: ["shapeId", "trips", "shapeSequences"],
  ShapeWhereUniqueInput: ["shapeId"],
  ShapeOrderByWithAggregationInput: ["shapeId", "_count", "_max", "_min"],
  ShapeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "shapeId"],
  ShapeSequenceWhereInput: ["AND", "OR", "NOT", "shapeId", "shape", "shapePtLat", "shapePtLon", "shapePtSequence"],
  ShapeSequenceOrderByWithRelationInput: ["shapeId", "shape", "shapePtLat", "shapePtLon", "shapePtSequence"],
  ShapeSequenceWhereUniqueInput: ["shapeId_shapePtSequence"],
  ShapeSequenceOrderByWithAggregationInput: ["shapeId", "shapePtLat", "shapePtLon", "shapePtSequence", "_count", "_avg", "_max", "_min", "_sum"],
  ShapeSequenceScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "shapeId", "shapePtLat", "shapePtLon", "shapePtSequence"],
  StopTimeWhereInput: ["AND", "OR", "NOT", "tripId", "trip", "arrivalTime", "departureTime", "stopId", "stop", "stopSequence"],
  StopTimeOrderByWithRelationInput: ["tripId", "trip", "arrivalTime", "departureTime", "stopId", "stop", "stopSequence"],
  StopTimeWhereUniqueInput: ["tripId_stopSequence"],
  StopTimeOrderByWithAggregationInput: ["tripId", "arrivalTime", "departureTime", "stopId", "stopSequence", "_count", "_avg", "_max", "_min", "_sum"],
  StopTimeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "tripId", "arrivalTime", "departureTime", "stopId", "stopSequence"],
  StopWhereInput: ["AND", "OR", "NOT", "stopId", "stopCode", "stopName", "stopDesc", "stopLat", "stopLon", "zoneId", "wheelchairBoarding", "transfersFrom", "transfersTo", "stopTimes", "category"],
  StopOrderByWithRelationInput: ["stopId", "stopCode", "stopName", "stopDesc", "stopLat", "stopLon", "zoneId", "wheelchairBoarding", "transfersFrom", "transfersTo", "stopTimes", "category"],
  StopWhereUniqueInput: ["stopId"],
  StopOrderByWithAggregationInput: ["stopId", "stopCode", "stopName", "stopDesc", "stopLat", "stopLon", "zoneId", "wheelchairBoarding", "category", "_count", "_avg", "_max", "_min", "_sum"],
  StopScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "stopId", "stopCode", "stopName", "stopDesc", "stopLat", "stopLon", "zoneId", "wheelchairBoarding", "category"],
  TransferWhereInput: ["AND", "OR", "NOT", "fromStopId", "fromStop", "toStopId", "toStop", "transferType", "minTransferTime"],
  TransferOrderByWithRelationInput: ["fromStopId", "fromStop", "toStopId", "toStop", "transferType", "minTransferTime"],
  TransferWhereUniqueInput: ["fromStopId_toStopId"],
  TransferOrderByWithAggregationInput: ["fromStopId", "toStopId", "transferType", "minTransferTime", "_count", "_avg", "_max", "_min", "_sum"],
  TransferScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "fromStopId", "toStopId", "transferType", "minTransferTime"],
  TripCreateInput: ["tripId", "route", "category", "service", "tripHeadsign", "directionId", "shape", "wheelchairAccessible", "stopTimes"],
  TripUpdateInput: ["tripId", "route", "category", "service", "tripHeadsign", "directionId", "shape", "wheelchairAccessible", "stopTimes"],
  TripCreateManyInput: ["tripId", "routeId", "category", "serviceId", "tripHeadsign", "directionId", "shapeId", "wheelchairAccessible"],
  TripUpdateManyMutationInput: ["tripId", "category", "tripHeadsign", "directionId", "wheelchairAccessible"],
  AgencyCreateInput: ["agencyId", "agencyName", "agencyUrl", "agencyTimezone", "agencyPhone", "agencyLang", "routes"],
  AgencyUpdateInput: ["agencyId", "agencyName", "agencyUrl", "agencyTimezone", "agencyPhone", "agencyLang", "routes"],
  AgencyCreateManyInput: ["agencyId", "agencyName", "agencyUrl", "agencyTimezone", "agencyPhone", "agencyLang"],
  AgencyUpdateManyMutationInput: ["agencyId", "agencyName", "agencyUrl", "agencyTimezone", "agencyPhone", "agencyLang"],
  CalendarCreateInput: ["serviceId", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "startDate", "endDate", "calendarDates", "trips"],
  CalendarUpdateInput: ["serviceId", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "startDate", "endDate", "calendarDates", "trips"],
  CalendarCreateManyInput: ["serviceId", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "startDate", "endDate"],
  CalendarUpdateManyMutationInput: ["serviceId", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "startDate", "endDate"],
  CalendarDateCreateInput: ["service", "date", "exceptionType"],
  CalendarDateUpdateInput: ["service", "date", "exceptionType"],
  CalendarDateCreateManyInput: ["serviceId", "date", "exceptionType"],
  CalendarDateUpdateManyMutationInput: ["date", "exceptionType"],
  RouteCreateInput: ["routeId", "agency", "routeShortName", "routeLongName", "routeType", "routeColor", "routeTextColor", "trips", "category"],
  RouteUpdateInput: ["routeId", "agency", "routeShortName", "routeLongName", "routeType", "routeColor", "routeTextColor", "trips", "category"],
  RouteCreateManyInput: ["routeId", "agencyId", "routeShortName", "routeLongName", "routeType", "routeColor", "routeTextColor", "category"],
  RouteUpdateManyMutationInput: ["routeId", "routeShortName", "routeLongName", "routeType", "routeColor", "routeTextColor", "category"],
  ShapeCreateInput: ["shapeId", "trips", "shapeSequences"],
  ShapeUpdateInput: ["shapeId", "trips", "shapeSequences"],
  ShapeCreateManyInput: ["shapeId"],
  ShapeUpdateManyMutationInput: ["shapeId"],
  ShapeSequenceCreateInput: ["shape", "shapePtLat", "shapePtLon", "shapePtSequence"],
  ShapeSequenceUpdateInput: ["shape", "shapePtLat", "shapePtLon", "shapePtSequence"],
  ShapeSequenceCreateManyInput: ["shapeId", "shapePtLat", "shapePtLon", "shapePtSequence"],
  ShapeSequenceUpdateManyMutationInput: ["shapePtLat", "shapePtLon", "shapePtSequence"],
  StopTimeCreateInput: ["trip", "arrivalTime", "departureTime", "stop", "stopSequence"],
  StopTimeUpdateInput: ["trip", "arrivalTime", "departureTime", "stop", "stopSequence"],
  StopTimeCreateManyInput: ["tripId", "arrivalTime", "departureTime", "stopId", "stopSequence"],
  StopTimeUpdateManyMutationInput: ["arrivalTime", "departureTime", "stopSequence"],
  StopCreateInput: ["stopId", "stopCode", "stopName", "stopDesc", "stopLat", "stopLon", "zoneId", "wheelchairBoarding", "transfersFrom", "transfersTo", "stopTimes", "category"],
  StopUpdateInput: ["stopId", "stopCode", "stopName", "stopDesc", "stopLat", "stopLon", "zoneId", "wheelchairBoarding", "transfersFrom", "transfersTo", "stopTimes", "category"],
  StopCreateManyInput: ["stopId", "stopCode", "stopName", "stopDesc", "stopLat", "stopLon", "zoneId", "wheelchairBoarding", "category"],
  StopUpdateManyMutationInput: ["stopId", "stopCode", "stopName", "stopDesc", "stopLat", "stopLon", "zoneId", "wheelchairBoarding", "category"],
  TransferCreateInput: ["fromStop", "toStop", "transferType", "minTransferTime"],
  TransferUpdateInput: ["fromStop", "toStop", "transferType", "minTransferTime"],
  TransferCreateManyInput: ["fromStopId", "toStopId", "transferType", "minTransferTime"],
  TransferUpdateManyMutationInput: ["transferType", "minTransferTime"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  RouteRelationFilter: ["is", "isNot"],
  EnumRouteCategoryFilter: ["equals", "in", "notIn", "not"],
  CalendarRelationFilter: ["is", "isNot"],
  EnumDirectionFilter: ["equals", "in", "notIn", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  ShapeRelationFilter: ["is", "isNot"],
  EnumWheelchairAccessibleFilter: ["equals", "in", "notIn", "not"],
  StopTimeListRelationFilter: ["every", "some", "none"],
  StopTimeOrderByRelationAggregateInput: ["_count"],
  TripCountOrderByAggregateInput: ["tripId", "routeId", "category", "serviceId", "tripHeadsign", "directionId", "shapeId", "wheelchairAccessible"],
  TripMaxOrderByAggregateInput: ["tripId", "routeId", "category", "serviceId", "tripHeadsign", "directionId", "shapeId", "wheelchairAccessible"],
  TripMinOrderByAggregateInput: ["tripId", "routeId", "category", "serviceId", "tripHeadsign", "directionId", "shapeId", "wheelchairAccessible"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumRouteCategoryWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumDirectionWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumWheelchairAccessibleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  RouteListRelationFilter: ["every", "some", "none"],
  RouteOrderByRelationAggregateInput: ["_count"],
  AgencyCountOrderByAggregateInput: ["agencyId", "agencyName", "agencyUrl", "agencyTimezone", "agencyPhone", "agencyLang"],
  AgencyAvgOrderByAggregateInput: ["agencyId"],
  AgencyMaxOrderByAggregateInput: ["agencyId", "agencyName", "agencyUrl", "agencyTimezone", "agencyPhone", "agencyLang"],
  AgencyMinOrderByAggregateInput: ["agencyId", "agencyName", "agencyUrl", "agencyTimezone", "agencyPhone", "agencyLang"],
  AgencySumOrderByAggregateInput: ["agencyId"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  BoolFilter: ["equals", "not"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  CalendarDateListRelationFilter: ["every", "some", "none"],
  TripListRelationFilter: ["every", "some", "none"],
  CalendarDateOrderByRelationAggregateInput: ["_count"],
  TripOrderByRelationAggregateInput: ["_count"],
  CalendarCountOrderByAggregateInput: ["serviceId", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "startDate", "endDate"],
  CalendarMaxOrderByAggregateInput: ["serviceId", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "startDate", "endDate"],
  CalendarMinOrderByAggregateInput: ["serviceId", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "startDate", "endDate"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  CalendarDateServiceIdDateCompoundUniqueInput: ["serviceId", "date"],
  CalendarDateCountOrderByAggregateInput: ["serviceId", "date", "exceptionType"],
  CalendarDateMaxOrderByAggregateInput: ["serviceId", "date", "exceptionType"],
  CalendarDateMinOrderByAggregateInput: ["serviceId", "date", "exceptionType"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  AgencyRelationFilter: ["is", "isNot"],
  EnumRouteTypeFilter: ["equals", "in", "notIn", "not"],
  RouteCountOrderByAggregateInput: ["routeId", "agencyId", "routeShortName", "routeLongName", "routeType", "routeColor", "routeTextColor", "category"],
  RouteAvgOrderByAggregateInput: ["agencyId"],
  RouteMaxOrderByAggregateInput: ["routeId", "agencyId", "routeShortName", "routeLongName", "routeType", "routeColor", "routeTextColor", "category"],
  RouteMinOrderByAggregateInput: ["routeId", "agencyId", "routeShortName", "routeLongName", "routeType", "routeColor", "routeTextColor", "category"],
  RouteSumOrderByAggregateInput: ["agencyId"],
  EnumRouteTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  ShapeSequenceListRelationFilter: ["every", "some", "none"],
  ShapeSequenceOrderByRelationAggregateInput: ["_count"],
  ShapeCountOrderByAggregateInput: ["shapeId"],
  ShapeMaxOrderByAggregateInput: ["shapeId"],
  ShapeMinOrderByAggregateInput: ["shapeId"],
  DecimalFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ShapeSequenceShapeIdShapePtSequenceCompoundUniqueInput: ["shapeId", "shapePtSequence"],
  ShapeSequenceCountOrderByAggregateInput: ["shapeId", "shapePtLat", "shapePtLon", "shapePtSequence"],
  ShapeSequenceAvgOrderByAggregateInput: ["shapePtLat", "shapePtLon", "shapePtSequence"],
  ShapeSequenceMaxOrderByAggregateInput: ["shapeId", "shapePtLat", "shapePtLon", "shapePtSequence"],
  ShapeSequenceMinOrderByAggregateInput: ["shapeId", "shapePtLat", "shapePtLon", "shapePtSequence"],
  ShapeSequenceSumOrderByAggregateInput: ["shapePtLat", "shapePtLon", "shapePtSequence"],
  DecimalWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  TripRelationFilter: ["is", "isNot"],
  StopRelationFilter: ["is", "isNot"],
  StopTimeTripIdStopSequenceCompoundUniqueInput: ["tripId", "stopSequence"],
  StopTimeCountOrderByAggregateInput: ["tripId", "arrivalTime", "departureTime", "stopId", "stopSequence"],
  StopTimeAvgOrderByAggregateInput: ["stopSequence"],
  StopTimeMaxOrderByAggregateInput: ["tripId", "arrivalTime", "departureTime", "stopId", "stopSequence"],
  StopTimeMinOrderByAggregateInput: ["tripId", "arrivalTime", "departureTime", "stopId", "stopSequence"],
  StopTimeSumOrderByAggregateInput: ["stopSequence"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  TransferListRelationFilter: ["every", "some", "none"],
  TransferOrderByRelationAggregateInput: ["_count"],
  StopCountOrderByAggregateInput: ["stopId", "stopCode", "stopName", "stopDesc", "stopLat", "stopLon", "zoneId", "wheelchairBoarding", "category"],
  StopAvgOrderByAggregateInput: ["stopLat", "stopLon", "zoneId"],
  StopMaxOrderByAggregateInput: ["stopId", "stopCode", "stopName", "stopDesc", "stopLat", "stopLon", "zoneId", "wheelchairBoarding", "category"],
  StopMinOrderByAggregateInput: ["stopId", "stopCode", "stopName", "stopDesc", "stopLat", "stopLon", "zoneId", "wheelchairBoarding", "category"],
  StopSumOrderByAggregateInput: ["stopLat", "stopLon", "zoneId"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  TransferFromStopIdToStopIdCompoundUniqueInput: ["fromStopId", "toStopId"],
  TransferCountOrderByAggregateInput: ["fromStopId", "toStopId", "transferType", "minTransferTime"],
  TransferAvgOrderByAggregateInput: ["transferType", "minTransferTime"],
  TransferMaxOrderByAggregateInput: ["fromStopId", "toStopId", "transferType", "minTransferTime"],
  TransferMinOrderByAggregateInput: ["fromStopId", "toStopId", "transferType", "minTransferTime"],
  TransferSumOrderByAggregateInput: ["transferType", "minTransferTime"],
  RouteCreateNestedOneWithoutTripsInput: ["create", "connectOrCreate", "connect"],
  CalendarCreateNestedOneWithoutTripsInput: ["create", "connectOrCreate", "connect"],
  ShapeCreateNestedOneWithoutTripsInput: ["create", "connectOrCreate", "connect"],
  StopTimeCreateNestedManyWithoutTripInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  RouteUpdateOneRequiredWithoutTripsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  EnumRouteCategoryFieldUpdateOperationsInput: ["set"],
  CalendarUpdateOneRequiredWithoutTripsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  EnumDirectionFieldUpdateOperationsInput: ["set"],
  ShapeUpdateOneWithoutTripsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  EnumWheelchairAccessibleFieldUpdateOperationsInput: ["set"],
  StopTimeUpdateManyWithoutTripNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  RouteCreateNestedManyWithoutAgencyInput: ["create", "connectOrCreate", "createMany", "connect"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  RouteUpdateManyWithoutAgencyNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CalendarDateCreateNestedManyWithoutServiceInput: ["create", "connectOrCreate", "createMany", "connect"],
  TripCreateNestedManyWithoutServiceInput: ["create", "connectOrCreate", "createMany", "connect"],
  BoolFieldUpdateOperationsInput: ["set"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  CalendarDateUpdateManyWithoutServiceNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TripUpdateManyWithoutServiceNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CalendarCreateNestedOneWithoutCalendarDatesInput: ["create", "connectOrCreate", "connect"],
  CalendarUpdateOneRequiredWithoutCalendarDatesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  AgencyCreateNestedOneWithoutRoutesInput: ["create", "connectOrCreate", "connect"],
  TripCreateNestedManyWithoutRouteInput: ["create", "connectOrCreate", "createMany", "connect"],
  AgencyUpdateOneRequiredWithoutRoutesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  EnumRouteTypeFieldUpdateOperationsInput: ["set"],
  TripUpdateManyWithoutRouteNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TripCreateNestedManyWithoutShapeInput: ["create", "connectOrCreate", "createMany", "connect"],
  ShapeSequenceCreateNestedManyWithoutShapeInput: ["create", "connectOrCreate", "createMany", "connect"],
  TripUpdateManyWithoutShapeNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ShapeSequenceUpdateManyWithoutShapeNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ShapeCreateNestedOneWithoutShapeSequencesInput: ["create", "connectOrCreate", "connect"],
  ShapeUpdateOneRequiredWithoutShapeSequencesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  DecimalFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  TripCreateNestedOneWithoutStopTimesInput: ["create", "connectOrCreate", "connect"],
  StopCreateNestedOneWithoutStopTimesInput: ["create", "connectOrCreate", "connect"],
  TripUpdateOneRequiredWithoutStopTimesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  StopUpdateOneRequiredWithoutStopTimesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TransferCreateNestedManyWithoutFromStopInput: ["create", "connectOrCreate", "createMany", "connect"],
  TransferCreateNestedManyWithoutToStopInput: ["create", "connectOrCreate", "createMany", "connect"],
  StopTimeCreateNestedManyWithoutStopInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  TransferUpdateManyWithoutFromStopNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TransferUpdateManyWithoutToStopNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  StopTimeUpdateManyWithoutStopNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  StopCreateNestedOneWithoutTransfersFromInput: ["create", "connectOrCreate", "connect"],
  StopCreateNestedOneWithoutTransfersToInput: ["create", "connectOrCreate", "connect"],
  StopUpdateOneRequiredWithoutTransfersFromNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  StopUpdateOneRequiredWithoutTransfersToNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumRouteCategoryFilter: ["equals", "in", "notIn", "not"],
  NestedEnumDirectionFilter: ["equals", "in", "notIn", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumWheelchairAccessibleFilter: ["equals", "in", "notIn", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumRouteCategoryWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumDirectionWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumWheelchairAccessibleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedEnumRouteTypeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumRouteTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedDecimalFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDecimalWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  RouteCreateWithoutTripsInput: ["routeId", "agency", "routeShortName", "routeLongName", "routeType", "routeColor", "routeTextColor", "category"],
  RouteCreateOrConnectWithoutTripsInput: ["where", "create"],
  CalendarCreateWithoutTripsInput: ["serviceId", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "startDate", "endDate", "calendarDates"],
  CalendarCreateOrConnectWithoutTripsInput: ["where", "create"],
  ShapeCreateWithoutTripsInput: ["shapeId", "shapeSequences"],
  ShapeCreateOrConnectWithoutTripsInput: ["where", "create"],
  StopTimeCreateWithoutTripInput: ["arrivalTime", "departureTime", "stop", "stopSequence"],
  StopTimeCreateOrConnectWithoutTripInput: ["where", "create"],
  StopTimeCreateManyTripInputEnvelope: ["data", "skipDuplicates"],
  RouteUpsertWithoutTripsInput: ["update", "create"],
  RouteUpdateWithoutTripsInput: ["routeId", "agency", "routeShortName", "routeLongName", "routeType", "routeColor", "routeTextColor", "category"],
  CalendarUpsertWithoutTripsInput: ["update", "create"],
  CalendarUpdateWithoutTripsInput: ["serviceId", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "startDate", "endDate", "calendarDates"],
  ShapeUpsertWithoutTripsInput: ["update", "create"],
  ShapeUpdateWithoutTripsInput: ["shapeId", "shapeSequences"],
  StopTimeUpsertWithWhereUniqueWithoutTripInput: ["where", "update", "create"],
  StopTimeUpdateWithWhereUniqueWithoutTripInput: ["where", "data"],
  StopTimeUpdateManyWithWhereWithoutTripInput: ["where", "data"],
  StopTimeScalarWhereInput: ["AND", "OR", "NOT", "tripId", "arrivalTime", "departureTime", "stopId", "stopSequence"],
  RouteCreateWithoutAgencyInput: ["routeId", "routeShortName", "routeLongName", "routeType", "routeColor", "routeTextColor", "trips", "category"],
  RouteCreateOrConnectWithoutAgencyInput: ["where", "create"],
  RouteCreateManyAgencyInputEnvelope: ["data", "skipDuplicates"],
  RouteUpsertWithWhereUniqueWithoutAgencyInput: ["where", "update", "create"],
  RouteUpdateWithWhereUniqueWithoutAgencyInput: ["where", "data"],
  RouteUpdateManyWithWhereWithoutAgencyInput: ["where", "data"],
  RouteScalarWhereInput: ["AND", "OR", "NOT", "routeId", "agencyId", "routeShortName", "routeLongName", "routeType", "routeColor", "routeTextColor", "category"],
  CalendarDateCreateWithoutServiceInput: ["date", "exceptionType"],
  CalendarDateCreateOrConnectWithoutServiceInput: ["where", "create"],
  CalendarDateCreateManyServiceInputEnvelope: ["data", "skipDuplicates"],
  TripCreateWithoutServiceInput: ["tripId", "route", "category", "tripHeadsign", "directionId", "shape", "wheelchairAccessible", "stopTimes"],
  TripCreateOrConnectWithoutServiceInput: ["where", "create"],
  TripCreateManyServiceInputEnvelope: ["data", "skipDuplicates"],
  CalendarDateUpsertWithWhereUniqueWithoutServiceInput: ["where", "update", "create"],
  CalendarDateUpdateWithWhereUniqueWithoutServiceInput: ["where", "data"],
  CalendarDateUpdateManyWithWhereWithoutServiceInput: ["where", "data"],
  CalendarDateScalarWhereInput: ["AND", "OR", "NOT", "serviceId", "date", "exceptionType"],
  TripUpsertWithWhereUniqueWithoutServiceInput: ["where", "update", "create"],
  TripUpdateWithWhereUniqueWithoutServiceInput: ["where", "data"],
  TripUpdateManyWithWhereWithoutServiceInput: ["where", "data"],
  TripScalarWhereInput: ["AND", "OR", "NOT", "tripId", "routeId", "category", "serviceId", "tripHeadsign", "directionId", "shapeId", "wheelchairAccessible"],
  CalendarCreateWithoutCalendarDatesInput: ["serviceId", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "startDate", "endDate", "trips"],
  CalendarCreateOrConnectWithoutCalendarDatesInput: ["where", "create"],
  CalendarUpsertWithoutCalendarDatesInput: ["update", "create"],
  CalendarUpdateWithoutCalendarDatesInput: ["serviceId", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "startDate", "endDate", "trips"],
  AgencyCreateWithoutRoutesInput: ["agencyId", "agencyName", "agencyUrl", "agencyTimezone", "agencyPhone", "agencyLang"],
  AgencyCreateOrConnectWithoutRoutesInput: ["where", "create"],
  TripCreateWithoutRouteInput: ["tripId", "category", "service", "tripHeadsign", "directionId", "shape", "wheelchairAccessible", "stopTimes"],
  TripCreateOrConnectWithoutRouteInput: ["where", "create"],
  TripCreateManyRouteInputEnvelope: ["data", "skipDuplicates"],
  AgencyUpsertWithoutRoutesInput: ["update", "create"],
  AgencyUpdateWithoutRoutesInput: ["agencyId", "agencyName", "agencyUrl", "agencyTimezone", "agencyPhone", "agencyLang"],
  TripUpsertWithWhereUniqueWithoutRouteInput: ["where", "update", "create"],
  TripUpdateWithWhereUniqueWithoutRouteInput: ["where", "data"],
  TripUpdateManyWithWhereWithoutRouteInput: ["where", "data"],
  TripCreateWithoutShapeInput: ["tripId", "route", "category", "service", "tripHeadsign", "directionId", "wheelchairAccessible", "stopTimes"],
  TripCreateOrConnectWithoutShapeInput: ["where", "create"],
  TripCreateManyShapeInputEnvelope: ["data", "skipDuplicates"],
  ShapeSequenceCreateWithoutShapeInput: ["shapePtLat", "shapePtLon", "shapePtSequence"],
  ShapeSequenceCreateOrConnectWithoutShapeInput: ["where", "create"],
  ShapeSequenceCreateManyShapeInputEnvelope: ["data", "skipDuplicates"],
  TripUpsertWithWhereUniqueWithoutShapeInput: ["where", "update", "create"],
  TripUpdateWithWhereUniqueWithoutShapeInput: ["where", "data"],
  TripUpdateManyWithWhereWithoutShapeInput: ["where", "data"],
  ShapeSequenceUpsertWithWhereUniqueWithoutShapeInput: ["where", "update", "create"],
  ShapeSequenceUpdateWithWhereUniqueWithoutShapeInput: ["where", "data"],
  ShapeSequenceUpdateManyWithWhereWithoutShapeInput: ["where", "data"],
  ShapeSequenceScalarWhereInput: ["AND", "OR", "NOT", "shapeId", "shapePtLat", "shapePtLon", "shapePtSequence"],
  ShapeCreateWithoutShapeSequencesInput: ["shapeId", "trips"],
  ShapeCreateOrConnectWithoutShapeSequencesInput: ["where", "create"],
  ShapeUpsertWithoutShapeSequencesInput: ["update", "create"],
  ShapeUpdateWithoutShapeSequencesInput: ["shapeId", "trips"],
  TripCreateWithoutStopTimesInput: ["tripId", "route", "category", "service", "tripHeadsign", "directionId", "shape", "wheelchairAccessible"],
  TripCreateOrConnectWithoutStopTimesInput: ["where", "create"],
  StopCreateWithoutStopTimesInput: ["stopId", "stopCode", "stopName", "stopDesc", "stopLat", "stopLon", "zoneId", "wheelchairBoarding", "transfersFrom", "transfersTo", "category"],
  StopCreateOrConnectWithoutStopTimesInput: ["where", "create"],
  TripUpsertWithoutStopTimesInput: ["update", "create"],
  TripUpdateWithoutStopTimesInput: ["tripId", "route", "category", "service", "tripHeadsign", "directionId", "shape", "wheelchairAccessible"],
  StopUpsertWithoutStopTimesInput: ["update", "create"],
  StopUpdateWithoutStopTimesInput: ["stopId", "stopCode", "stopName", "stopDesc", "stopLat", "stopLon", "zoneId", "wheelchairBoarding", "transfersFrom", "transfersTo", "category"],
  TransferCreateWithoutFromStopInput: ["toStop", "transferType", "minTransferTime"],
  TransferCreateOrConnectWithoutFromStopInput: ["where", "create"],
  TransferCreateManyFromStopInputEnvelope: ["data", "skipDuplicates"],
  TransferCreateWithoutToStopInput: ["fromStop", "transferType", "minTransferTime"],
  TransferCreateOrConnectWithoutToStopInput: ["where", "create"],
  TransferCreateManyToStopInputEnvelope: ["data", "skipDuplicates"],
  StopTimeCreateWithoutStopInput: ["trip", "arrivalTime", "departureTime", "stopSequence"],
  StopTimeCreateOrConnectWithoutStopInput: ["where", "create"],
  StopTimeCreateManyStopInputEnvelope: ["data", "skipDuplicates"],
  TransferUpsertWithWhereUniqueWithoutFromStopInput: ["where", "update", "create"],
  TransferUpdateWithWhereUniqueWithoutFromStopInput: ["where", "data"],
  TransferUpdateManyWithWhereWithoutFromStopInput: ["where", "data"],
  TransferScalarWhereInput: ["AND", "OR", "NOT", "fromStopId", "toStopId", "transferType", "minTransferTime"],
  TransferUpsertWithWhereUniqueWithoutToStopInput: ["where", "update", "create"],
  TransferUpdateWithWhereUniqueWithoutToStopInput: ["where", "data"],
  TransferUpdateManyWithWhereWithoutToStopInput: ["where", "data"],
  StopTimeUpsertWithWhereUniqueWithoutStopInput: ["where", "update", "create"],
  StopTimeUpdateWithWhereUniqueWithoutStopInput: ["where", "data"],
  StopTimeUpdateManyWithWhereWithoutStopInput: ["where", "data"],
  StopCreateWithoutTransfersFromInput: ["stopId", "stopCode", "stopName", "stopDesc", "stopLat", "stopLon", "zoneId", "wheelchairBoarding", "transfersTo", "stopTimes", "category"],
  StopCreateOrConnectWithoutTransfersFromInput: ["where", "create"],
  StopCreateWithoutTransfersToInput: ["stopId", "stopCode", "stopName", "stopDesc", "stopLat", "stopLon", "zoneId", "wheelchairBoarding", "transfersFrom", "stopTimes", "category"],
  StopCreateOrConnectWithoutTransfersToInput: ["where", "create"],
  StopUpsertWithoutTransfersFromInput: ["update", "create"],
  StopUpdateWithoutTransfersFromInput: ["stopId", "stopCode", "stopName", "stopDesc", "stopLat", "stopLon", "zoneId", "wheelchairBoarding", "transfersTo", "stopTimes", "category"],
  StopUpsertWithoutTransfersToInput: ["update", "create"],
  StopUpdateWithoutTransfersToInput: ["stopId", "stopCode", "stopName", "stopDesc", "stopLat", "stopLon", "zoneId", "wheelchairBoarding", "transfersFrom", "stopTimes", "category"],
  StopTimeCreateManyTripInput: ["arrivalTime", "departureTime", "stopId", "stopSequence"],
  StopTimeUpdateWithoutTripInput: ["arrivalTime", "departureTime", "stop", "stopSequence"],
  RouteCreateManyAgencyInput: ["routeId", "routeShortName", "routeLongName", "routeType", "routeColor", "routeTextColor", "category"],
  RouteUpdateWithoutAgencyInput: ["routeId", "routeShortName", "routeLongName", "routeType", "routeColor", "routeTextColor", "trips", "category"],
  CalendarDateCreateManyServiceInput: ["date", "exceptionType"],
  TripCreateManyServiceInput: ["tripId", "routeId", "category", "tripHeadsign", "directionId", "shapeId", "wheelchairAccessible"],
  CalendarDateUpdateWithoutServiceInput: ["date", "exceptionType"],
  TripUpdateWithoutServiceInput: ["tripId", "route", "category", "tripHeadsign", "directionId", "shape", "wheelchairAccessible", "stopTimes"],
  TripCreateManyRouteInput: ["tripId", "category", "serviceId", "tripHeadsign", "directionId", "shapeId", "wheelchairAccessible"],
  TripUpdateWithoutRouteInput: ["tripId", "category", "service", "tripHeadsign", "directionId", "shape", "wheelchairAccessible", "stopTimes"],
  TripCreateManyShapeInput: ["tripId", "routeId", "category", "serviceId", "tripHeadsign", "directionId", "wheelchairAccessible"],
  ShapeSequenceCreateManyShapeInput: ["shapePtLat", "shapePtLon", "shapePtSequence"],
  TripUpdateWithoutShapeInput: ["tripId", "route", "category", "service", "tripHeadsign", "directionId", "wheelchairAccessible", "stopTimes"],
  ShapeSequenceUpdateWithoutShapeInput: ["shapePtLat", "shapePtLon", "shapePtSequence"],
  TransferCreateManyFromStopInput: ["toStopId", "transferType", "minTransferTime"],
  TransferCreateManyToStopInput: ["fromStopId", "transferType", "minTransferTime"],
  StopTimeCreateManyStopInput: ["tripId", "arrivalTime", "departureTime", "stopSequence"],
  TransferUpdateWithoutFromStopInput: ["toStop", "transferType", "minTransferTime"],
  TransferUpdateWithoutToStopInput: ["fromStop", "transferType", "minTransferTime"],
  StopTimeUpdateWithoutStopInput: ["trip", "arrivalTime", "departureTime", "stopSequence"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

