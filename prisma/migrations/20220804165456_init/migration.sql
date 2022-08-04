-- CreateEnum
CREATE TYPE "WheelchairAccessible" AS ENUM ('NO_INFO', 'YES', 'NO');

-- CreateEnum
CREATE TYPE "Direction" AS ENUM ('WAY', 'RETURN');

-- CreateEnum
CREATE TYPE "RouteCategory" AS ENUM ('URBAN', 'SUBURBAN');

-- CreateEnum
CREATE TYPE "RouteType" AS ENUM ('TRAM', 'SUBWAY', 'TRAIN', 'BUS', 'FERRY', 'CABLE_CAR', 'GONDOLA', 'ROPE_WAY');

-- CreateTable
CREATE TABLE "Trip" (
    "tripId" TEXT NOT NULL,
    "routeId" TEXT NOT NULL,
    "category" "RouteCategory" NOT NULL DEFAULT 'URBAN',
    "serviceId" TEXT NOT NULL,
    "tripHeadsign" TEXT NOT NULL,
    "directionId" "Direction" NOT NULL DEFAULT 'WAY',
    "shapeId" TEXT,
    "wheelchairAccessible" "WheelchairAccessible" NOT NULL DEFAULT 'NO_INFO',

    CONSTRAINT "Trip_pkey" PRIMARY KEY ("tripId")
);

-- CreateTable
CREATE TABLE "Agency" (
    "agencyId" INTEGER NOT NULL,
    "agencyName" TEXT NOT NULL,
    "agencyUrl" TEXT NOT NULL,
    "agencyTimezone" TEXT NOT NULL,
    "agencyPhone" TEXT NOT NULL,
    "agencyLang" TEXT NOT NULL,

    CONSTRAINT "Agency_pkey" PRIMARY KEY ("agencyId")
);

-- CreateTable
CREATE TABLE "Calendar" (
    "serviceId" TEXT NOT NULL,
    "monday" BOOLEAN NOT NULL,
    "tuesday" BOOLEAN NOT NULL,
    "wednesday" BOOLEAN NOT NULL,
    "thursday" BOOLEAN NOT NULL,
    "friday" BOOLEAN NOT NULL,
    "saturday" BOOLEAN NOT NULL,
    "sunday" BOOLEAN NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),

    CONSTRAINT "Calendar_pkey" PRIMARY KEY ("serviceId")
);

-- CreateTable
CREATE TABLE "CalendarDate" (
    "serviceId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "exceptionType" BOOLEAN NOT NULL,

    CONSTRAINT "CalendarDate_pkey" PRIMARY KEY ("serviceId","date")
);

-- CreateTable
CREATE TABLE "Route" (
    "routeId" TEXT NOT NULL,
    "agencyId" INTEGER NOT NULL,
    "routeShortName" TEXT NOT NULL,
    "routeLongName" TEXT NOT NULL,
    "routeType" "RouteType" NOT NULL,
    "routeColor" TEXT,
    "routeTextColor" TEXT,
    "category" "RouteCategory" NOT NULL DEFAULT 'URBAN',

    CONSTRAINT "Route_pkey" PRIMARY KEY ("routeId")
);

-- CreateTable
CREATE TABLE "Shape" (
    "shapeId" TEXT NOT NULL,

    CONSTRAINT "Shape_pkey" PRIMARY KEY ("shapeId")
);

-- CreateTable
CREATE TABLE "ShapeSequence" (
    "shapeId" TEXT NOT NULL,
    "shapePtLat" DECIMAL(65,30) NOT NULL,
    "shapePtLon" DECIMAL(65,30) NOT NULL,
    "shapePtSequence" INTEGER NOT NULL,

    CONSTRAINT "ShapeSequence_pkey" PRIMARY KEY ("shapeId","shapePtSequence")
);

-- CreateTable
CREATE TABLE "StopTime" (
    "tripId" TEXT NOT NULL,
    "arrivalTime" TEXT NOT NULL,
    "departureTime" TEXT NOT NULL,
    "stopId" TEXT NOT NULL,
    "stopSequence" INTEGER NOT NULL,

    CONSTRAINT "StopTime_pkey" PRIMARY KEY ("tripId","stopSequence")
);

-- CreateTable
CREATE TABLE "Stop" (
    "stopId" TEXT NOT NULL,
    "stopCode" TEXT NOT NULL,
    "stopName" TEXT NOT NULL,
    "stopDesc" TEXT NOT NULL,
    "stopLat" DECIMAL(65,30) NOT NULL,
    "stopLon" DECIMAL(65,30) NOT NULL,
    "zoneId" INTEGER,
    "wheelchairBoarding" "WheelchairAccessible" NOT NULL DEFAULT 'NO_INFO',
    "category" "RouteCategory" NOT NULL DEFAULT 'URBAN',

    CONSTRAINT "Stop_pkey" PRIMARY KEY ("stopId")
);

-- CreateTable
CREATE TABLE "Transfer" (
    "fromStopId" TEXT NOT NULL,
    "toStopId" TEXT NOT NULL,
    "transferType" INTEGER NOT NULL,
    "minTransferTime" INTEGER NOT NULL,

    CONSTRAINT "Transfer_pkey" PRIMARY KEY ("fromStopId","toStopId")
);

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route"("routeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Calendar"("serviceId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_shapeId_fkey" FOREIGN KEY ("shapeId") REFERENCES "Shape"("shapeId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CalendarDate" ADD CONSTRAINT "CalendarDate_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Calendar"("serviceId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Route" ADD CONSTRAINT "Route_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "Agency"("agencyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShapeSequence" ADD CONSTRAINT "ShapeSequence_shapeId_fkey" FOREIGN KEY ("shapeId") REFERENCES "Shape"("shapeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StopTime" ADD CONSTRAINT "StopTime_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("tripId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StopTime" ADD CONSTRAINT "StopTime_stopId_fkey" FOREIGN KEY ("stopId") REFERENCES "Stop"("stopId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transfer" ADD CONSTRAINT "Transfer_fromStopId_fkey" FOREIGN KEY ("fromStopId") REFERENCES "Stop"("stopId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transfer" ADD CONSTRAINT "Transfer_toStopId_fkey" FOREIGN KEY ("toStopId") REFERENCES "Stop"("stopId") ON DELETE RESTRICT ON UPDATE CASCADE;
