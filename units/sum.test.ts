import sum from '../sunday-testing/sunday.sum'

describe("A bunch of different tests about basic function", () => {
    test("Testing the application description", () => {
        expect(sum(1, 2)).toBe(3);
        expect(sum(3, 5)).toBeTruthy();
    })
})
