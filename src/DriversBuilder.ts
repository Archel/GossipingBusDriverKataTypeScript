import Driver from "./Driver";

export default class DriversBuilder {
    public from(routes: number[][]): Driver[] {
        const drivers = [];
        routes.forEach((route, id) => {
            drivers.push(new Driver(id, route));
        });

        return drivers;
    }
}
