import Console from "./Console";
import DriverPerBusStopBuilder from "./DriverPerBusStopBuilder";
import DriversBuilder from "./DriversBuilder";
import GossipChecker from "./GossipChecker";
import GossipUpdater from "./GossipUpdater";
    
export default class GossipExchanger {
    private static readonly MINUTES_OF_THE_JOURNEY = 480;

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
        const drivers = this.driversBuilder.from(routes);
        
        let minute = 0;
        
        while (minute < GossipExchanger.MINUTES_OF_THE_JOURNEY
            && !this.gossipChecker.allTheDriversHaveAllGossips(drivers)) {
            const driversPerBusStop = this.driverPerBusStopBuilder.group(drivers, minute);
            this.gossipUpdater.update(driversPerBusStop);
            minute++;
        }
        
        if (this.gossipChecker.allTheDriversHaveAllGossips(drivers)) {
            minute--;
            this.console.printLine(minute.toString());
        } else {
            this.console.printLine("never");
        }
    }
}
