import Driver from "../src/Driver";
import GossipUpdater from "../src/GossipUpdater";

describe("Gossip Updater Should", () => {
    it("return the driver without new gossips if he is alone on the stop", () => {
        const driversGrouppedByStop = {
            1: [new Driver(0, [1])],
        };

        const gossipUpdater = new GossipUpdater();
        const drivers = gossipUpdater.update(driversGrouppedByStop);

        expect(drivers[0].numberOfGossips()).toBe(1);
    });

    it("return the drivers without new gossips if they are alone on the stops", () => {
        const driversGrouppedByStop = {
            1: [
                new Driver(0, [1]),
            ],
            2: [
                new Driver(1, [2]),
            ],
        };

        const gossipUpdater = new GossipUpdater();
        const drivers = gossipUpdater.update(driversGrouppedByStop);

        expect(drivers[0].numberOfGossips()).toBe(1);
        expect(drivers[1].numberOfGossips()).toBe(1);
    });

    it("return the drivers with the new gossips if they are on the same stop", () => {
        const driversGrouppedByStop = {
            1: [
                new Driver(0, [1]),
                new Driver(1, [1]),
            ],
        };

        const gossipUpdater = new GossipUpdater();
        const drivers = gossipUpdater.update(driversGrouppedByStop);

        expect(drivers[0].numberOfGossips()).toBe(2);
        expect(drivers[1].numberOfGossips()).toBe(2);
    });

    it("return the drivers with the new gossips if they are on the same stop2", () => {
        const driver = new Driver(0, [1]);
        const driversGrouppedByStopAtSomePointOfTheJourney = {
            1: [
                driver,
                new Driver(1, [1]),
            ],
        };

        const gossipUpdater = new GossipUpdater();
        gossipUpdater.update(driversGrouppedByStopAtSomePointOfTheJourney);

        const driversGrouppedByStopAtOtherPointOfTheJourney = {
            1: [
                driver,
                new Driver(2, [1]),
            ],
        };

        const drivers = gossipUpdater.update(driversGrouppedByStopAtOtherPointOfTheJourney);

        expect(drivers[0].numberOfGossips()).toBe(3);
        expect(drivers[1].numberOfGossips()).toBe(3);
    });
});
