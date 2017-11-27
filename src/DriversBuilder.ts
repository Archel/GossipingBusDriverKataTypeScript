import Driver from "./Driver";

export default class DriversBuilder {
    public from(routes: number[][]): Driver[] {
        return [new Driver(1, routes[0])];
    }
}
