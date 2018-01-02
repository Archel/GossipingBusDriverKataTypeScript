jest.mock("../src/Console");
jest.mock("../src/DriverPerBusStopBuilder");
jest.mock("../src/DriversBuilder");
jest.mock("../src/GossipChecker");
jest.mock("../src/GossipUpdater");

import Console from "../src/Console";
import DriverPerBusStopBuilder from "../src/DriverPerBusStopBuilder";
import DriversBuilder from "../src/DriversBuilder";
import GossipChecker from "../src/GossipChecker";
import GossipExchanger from "../src/GossipExchanger";
import GossipUpdater from "../src/GossipUpdater";

describe("Gossip Exchanger Should", () => {
    it("output the number of stops after all drivers have all the gossips during the journey", () => {
        const console = new Console();
        const driverPerBusStopBuilder = new DriverPerBusStopBuilder();
        const driversBuilder = new DriversBuilder();
        const gossipUpdater = new GossipUpdater();
        const gossipChecker = new GossipChecker();
        
        const routes = [
            [3, 1, 2, 3],
            [3, 2, 3, 1],
            [4, 2, 3, 4, 5],
        ];

        gossipChecker.allTheDriversHaveAllGossips = jest.fn().mockImplementation(() => {
            if (gossipChecker.allTheDriversHaveAllGossips.mock.calls.length >= 7) {
                return true;
            }

            return false;
        });

        const gossipingBusDrivers = new GossipExchanger(
            console,
            driversBuilder,
            driverPerBusStopBuilder,
            gossipUpdater,
            gossipChecker,
        );
        gossipingBusDrivers.calculateMinimumBusStopsDuringTheJourney(routes);
        
        expect(driversBuilder.from).toHaveBeenCalled();
        expect(driverPerBusStopBuilder.group).toHaveBeenCalled();
        expect(gossipUpdater.update).toHaveBeenCalled();
        expect(console.printLine).toHaveBeenCalledWith("5");
    });
    
    it("output never if there is at least one driver that haven't all the gossips", () => {
        const console = new Console();
        const driverPerBusStopBuilder = new DriverPerBusStopBuilder();
        const driversBuilder = new DriversBuilder();
        const gossipUpdater = new GossipUpdater();
        const gossipChecker = new GossipChecker();

        const routes = [
            [2, 1, 2],
            [5, 2, 8],
        ];
        const gossipingBusDrivers = new GossipExchanger(
            console,
            driversBuilder,
            driverPerBusStopBuilder,
            gossipUpdater,
            gossipChecker,
        );
        gossipingBusDrivers.calculateMinimumBusStopsDuringTheJourney(routes);
        
        expect(driversBuilder.from).toHaveBeenCalled();
        expect(driverPerBusStopBuilder.group).toHaveBeenCalled();
        expect(gossipUpdater.update).toHaveBeenCalled();
        expect(console.printLine).toHaveBeenCalledWith("never");
    });
});
