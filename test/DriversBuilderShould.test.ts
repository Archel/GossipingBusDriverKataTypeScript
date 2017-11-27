import Driver from "../src/Driver";
import DriversBuilder from "../src/DriversBuilder";

describe("Drivers Builder Should", () => {
    it("return a drivers list from routes", () => {
        const driversBuilder = new DriversBuilder();
        const routes = [
            [1],
        ];

        const drivers = driversBuilder.from(routes);
        expect(drivers).toEqual([
            new Driver(1, routes[0]),
        ]);
    });
});
