import Driver from "../src/Driver";
import DriverPerBusStopBuilder from "../src/DriverPerBusStopBuilder";

describe("Driver Per Bus Stop Builder Should", () => {
    it("group a bus drivers per stop at the beginning of the journey", () => {
        const driverPerBusStopBuilder = new DriverPerBusStopBuilder();
        const driverPerBusStop = driverPerBusStopBuilder.group([
            new Driver(0, [1]),
        ], 0);

        expect(driverPerBusStop).toEqual({
            1: [
                new Driver(0, [1]),
            ],
        });
    });

    it("group a bus drivers per stop at certain minute", () => {
        const driverPerBusStopBuilder = new DriverPerBusStopBuilder();
        const driverPerBusStop = driverPerBusStopBuilder.group([
            new Driver(0, [1]),
            new Driver(1, [2]),
        ], 60);

        expect(driverPerBusStop).toEqual({
            1: [
                new Driver(0, [1]),
            ],
            2: [
                new Driver(1, [2]),
            ],
        });
    });
});
