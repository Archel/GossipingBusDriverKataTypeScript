import Driver from "./Driver";

export default class GossipUpdater {
    public update(driversGrouppedByStop: {[key: number]: Driver[]}): Driver[] {
        let drivers = [];

        Object.keys(driversGrouppedByStop).forEach((stop) => {
            drivers = drivers.concat(driversGrouppedByStop[stop]);
        });
        
        return drivers;
    }

}
