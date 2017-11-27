import Driver from "../src/Driver";
import DriversBuilder from "../src/DriversBuilder";

describe("Drivers Builder Should", () => {
    it("return a drivers list from one route", () => {
        const driversBuilder = new DriversBuilder();
        const routes = [
            [1],
        ];

        const drivers = driversBuilder.from(routes);
        expect(drivers).toEqual([
            new Driver(0, [1]),
        ]);
    });

    it("return a driver list from several route", () => {
        const driversBuilder = new DriversBuilder();
        const routes = [
            [1, 2],
            [5, 6, 3],
        ];

        const drivers = driversBuilder.from(routes);

        expect(drivers).toEqual([
            new Driver(0, [1, 2]),
            new Driver(1, [5, 6, 3]),
        ]);
    });
});
