import sum from '../sunday-testing/sunday.sum'
import difference from '../sunday-testing/sunday.difference'

describe("A bunch of different tests about basic function", () => {
    test("Testing the application description", () => {
        expect(sum(1, 2)).toBe(3);
        expect(sum(3, 5)).toBeTruthy();
    })
    
})


describe("difference tests", () => {
    test("Difference test functions as expected", () => {
        expect(difference(4,2)).toBe(2);
    })
})