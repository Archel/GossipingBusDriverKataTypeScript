import Driver from "../src/Driver";

describe("Driver should",  () => {
    let driver: Driver;

    beforeEach(() => {
        driver = new Driver(0, [1, 2, 3, 4]);
    });

    it("return the stop at the beginning of the journey", () => {
        const stop = driver.getStopAt(0);

        expect(stop).toEqual(1);
    });

    it("return the stop at certain minute", () => {
        const stop = driver.getStopAt(60);

        expect(stop).toEqual(4);
    });
});
