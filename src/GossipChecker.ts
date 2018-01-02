import Driver from "./Driver";

export default class GossipChecker {
    public check(drivers: Driver[]): boolean {
        for (const driver of drivers) {
            if (driver.numberOfGossips() !== drivers.length) {
                return false;
            }
        }

        return true;
    }
}
