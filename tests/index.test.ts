import { calculateTax } from "../src";

describe("all of them tests will come in here", () => {
    it("test with no taxes", () => {
        const salary = 2000;

        const taxation = calculateTax(salary);

        expect(taxation).toEqual(0);
    })

    it("test with 0,075% tax", () => {
        const salary = 2700;
        const expectedValue = salary * 0.075;

        const taxation = calculateTax(salary);

        expect(taxation).toEqual(expectedValue);
    })

    it("test with 0,15% tax", () => {
        const salary = 4000;
        const expectedValue = salary * 0.15;

        const taxation = calculateTax(salary);

        expect(taxation).toEqual(expectedValue);
    })

    it("test with 0,225% tax", () => {
        const salary = 5000;
        const expectedValue = salary * 0.225;

        const taxation = calculateTax(salary);

        expect(taxation).toEqual(expectedValue);
    })

    it("test with 0,275% tax", () => {
        const salary = 7000;
        const expectedValue = salary * 0.275;

        const taxation = calculateTax(salary);

        expect(taxation).toEqual(expectedValue);
    })
})