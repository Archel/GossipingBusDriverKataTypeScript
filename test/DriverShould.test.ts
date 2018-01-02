import Driver from "../src/Driver";

describe("Driver should",  () => {
    it("return the stop at the beginning of the journey", () => {
        const driver = new Driver(0, [1]);
        const stop = driver.getStopAt(0);

        expect(stop).toEqual(1);
    });
});
