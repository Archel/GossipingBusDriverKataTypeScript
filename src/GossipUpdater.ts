import Driver from "./Driver";

export default class GossipUpdater {
    public update(driversGrouppedByStop: {[key: number]: Driver[]}): Driver[] {
        return driversGrouppedByStop[1];
    }

}
