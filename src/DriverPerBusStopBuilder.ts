import Driver from "./Driver";

export default class DriverPerBusStopBuilder {
    public group(drivers: Driver[], minute: number): {[key: number]: Driver[]} {
        const grouppedDriversPerStop = {};
        drivers.forEach((driver, index) => {
            const stop = driver.getStopAt(minute);

            if (typeof grouppedDriversPerStop[stop] === "undefined") {
                grouppedDriversPerStop[stop] = [];
            }
            grouppedDriversPerStop[stop].push(driver);
        });

        return grouppedDriversPerStop;
    }
}
