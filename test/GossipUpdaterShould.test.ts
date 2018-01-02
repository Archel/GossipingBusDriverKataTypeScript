import Driver from "../src/Driver";
import GossipUpdater from "../src/GossipUpdater";

describe("Gossip Updater Should", () => {
    it("return the driver without new gossips if he is alone on the stop", () => {
        const driversGrouppedByStop = {
            1: [new Driver(0, [1, 2, 3])],
        };

        const gossipUpdater = new GossipUpdater();
        const drivers = gossipUpdater.update(driversGrouppedByStop);

        expect(drivers[0]).toBe(driversGrouppedByStop[1][0]);
    });
});
