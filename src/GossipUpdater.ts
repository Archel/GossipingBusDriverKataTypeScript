import Driver from "./Driver";

export default class GossipUpdater {
    public update(driversGrouppedByStop: {[key: number]: Driver[]}): Driver[] {
        let drivers = [];

        Object.keys(driversGrouppedByStop).forEach((stop) => {
            const driversOnTheStop = driversGrouppedByStop[stop];
            this.doGossipExchange(driversOnTheStop);

            drivers = drivers.concat(driversGrouppedByStop[stop]);
        });
        
        return drivers;
    }

    private doGossipExchange(driversOnTheStop: Driver[]) {
        driversOnTheStop.forEach((driver: Driver) => {
            driversOnTheStop.forEach((driverMate: Driver) => {
                driver.exchangeGossips(driverMate);
            });
        });
    }
}
