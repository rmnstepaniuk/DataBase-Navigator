const addElementToArray = require('./example.js')

var testArray = [1, 2, 3, 5]

describe("Array tests", () => {
    test("Array length should be greater than 0", () => {
        expect(testArray.length).toBeGreaterThan(0);
    });
    test("Array elements should be numbers", () => {
        testArray.forEach(element => {
            expect(typeof element).toEqual('number');
        })
    });
    test("Array length should have changed by 1", () => {
        let arrayLength = testArray.length
        addElementToArray(testArray, 4)
        expect(testArray.length).toEqual(arrayLength + 1)
    })
});