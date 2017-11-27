import Console from "../src/Console";
import DriverPerBusStopBuilder from "../src/DriverPerBusStopBuilder";
import DriversBuilder from "../src/DriversBuilder";
import GossipChecker from "../src/GossipChecker";
import GossipExchanger from "../src/GossipExchanger";
import GossipUpdater from "../src/GossipUpdater";

function mockConsole(): Console {
    const MockedConsole = jest.fn<Console>(() => ({
        printLine: jest.fn(),
    }));

    return new MockedConsole();
}

function mockDriversBuilder() {
    const MockedDriversBuilder = jest.fn<DriversBuilder>(() => ({
    }));

    return new MockedDriversBuilder();
}

function mockDriverPerBusStopBuilder() {
    const MockedDriverPerBusStopBuilder = jest.fn<DriverPerBusStopBuilder>(() => ({
    }));

    return new MockedDriverPerBusStopBuilder();
}

function mockGossipUpdater() {
    const MockedGossipUpdater = jest.fn<GossipUpdater>(() => ({
    }));

    return new MockedGossipUpdater();
}

function mockGossipChecker() {
    const MockedGossipChecker = jest.fn<GossipChecker>(() => ({
    }));

    return new MockedGossipChecker();
}

describe("Gossip Exchanger Should", () => {
    it("output the number of stops after all drivers have all the gossips during the journey", () => {
        const console = mockConsole();
        const driverPerBusStopBuilder = mockDriverPerBusStopBuilder();
        const driversBuilder = mockDriversBuilder();
        const gossipUpdater = mockGossipUpdater();
        const gossipChecker = mockGossipChecker();
        const routes = [
            [3, 1, 2, 3],
            [3, 2, 3, 1],
            [4, 2, 3, 4, 5],
        ];
        
        const gossipingBusDrivers = new GossipExchanger(
            console,
            driversBuilder,
            driverPerBusStopBuilder,
            gossipUpdater,
            gossipChecker,
        );
        gossipingBusDrivers.calculateMinimumBusStopsDuringTheJourney(routes);
        // ...
        expect(console.printLine).toHaveBeenCalledWith("5");
    });
    
    it("output never if there is at least one driver that haven't all the gossips", () => {
        const console = mockConsole();
        const driverPerBusStopBuilder = new DriverPerBusStopBuilder();
        const driversBuilder = mockDriversBuilder();
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
        // ...
        expect(console.printLine).toHaveBeenCalledWith("never");
    });
});
