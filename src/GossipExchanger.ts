import Console from "./Console";
import DriverPerBusStopBuilder from "./DriverPerBusStopBuilder";
import DriversBuilder from "./DriversBuilder";
import GossipChecker from "./GossipChecker";
import GossipUpdater from "./GossipUpdater";
    
export default class GossipExchanger {
    private console: Console;
    private driversBuilder: DriversBuilder;
    private driverPerBusStopBuilder: DriverPerBusStopBuilder;
    private gossipChecker: GossipChecker;
    private gossipUpdater: GossipUpdater;
    
    constructor(
        console: Console,
        driversBuilder: DriversBuilder,
        driverPerBusStopBuilder: DriverPerBusStopBuilder,
        gossipUpdater: GossipUpdater,
        gossipChecker: GossipChecker,
    ) {
        this.console = console;
        this.driversBuilder = driversBuilder;
        this.driverPerBusStopBuilder = driverPerBusStopBuilder;
        this.gossipUpdater = gossipUpdater;
        this.gossipChecker = gossipChecker;
    }

    public calculateMinimumBusStopsDuringTheJourney(routes: number[][]): void {
        throw new Error("Method not implemented.");
    }
}
