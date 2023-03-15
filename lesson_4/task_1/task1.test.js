const { sumSliceArray, SliceException } = require("./task1");

// as I want to switch from QA Manual to AQA Engineer at first I will try add some unit tests to my code if you don't mind :)

// Test valid inputs
test("sumSliceArray should return 3 when given [1, 2, 3] and indices 0 and 1", () => {
  expect(sumSliceArray([1, 2, 3], 0, 1)).toEqual(3);
});

// Test invalid array input
test("sumSliceArray should throw a SliceException when given a non-array input", () => {
  expect(() => {
    sumSliceArray("not an array", 0, 1);
  }).toThrowError(SliceException);
});

// Test out of bounds index input
test("sumSliceArray should throw a SliceException when given out of bounds index values", () => {
  expect(() => {
    sumSliceArray([1, 2, 3], 0, 5);
  }).toThrowError(SliceException);
});

module.exports = { sumSliceArray, SliceException };
