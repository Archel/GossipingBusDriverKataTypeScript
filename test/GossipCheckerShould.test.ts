import Driver from "../src/Driver";
import GossipChecker from "../src/GossipChecker";

describe("Gossip Checker Should", () => {
    const gossipChecker = new GossipChecker();

    it("return true if all the drivers have all the gossips", () => {
        const driversWithAllTheGossips = [
            new Driver(0, []),
        ];

        expect(gossipChecker.allTheDriversHaveAllGossips(driversWithAllTheGossips)).toBe(true);
    });

    it("return false if all the drivers don't have all the gossips", () => {
        const driversWithoutAllTheGossips = [
            new Driver(0, []),
            new Driver(1, []),
        ];
        
        expect(gossipChecker.allTheDriversHaveAllGossips(driversWithoutAllTheGossips)).toBe(false);
    });
});
