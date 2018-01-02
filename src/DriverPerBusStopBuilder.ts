import Driver from "./Driver";

export default class DriverPerBusStopBuilder {
    public group(drivers: Driver[], minute: number): {[key: number]: Driver[]} {
        const grouppedDriversPerStop = {};
        const stop = drivers[0].getCurrentStop(minute);
        
        grouppedDriversPerStop[stop] = [drivers[0]];

        return grouppedDriversPerStop;
    }

}
