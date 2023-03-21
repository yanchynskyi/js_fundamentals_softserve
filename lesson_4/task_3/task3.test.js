const { RectangleException, calcRectangleArea } = require("./task3");

module.exports = {
  RectangleException,
  calcRectangleArea,
};

//happy path
test("should return correct result with valid inputs", () => {
  expect(calcRectangleArea(2, 5)).toBe(10);
});

//negative case 1
test("should throw an RectangleException for an empty inputs", () => {
  expect(() => calcRectangleArea("", "")).toThrow(RectangleException);
});

//negative case 2
test("should throw an RectangleException for an non-numeric inputs", () => {
  expect(() => calcRectangleArea("1", "$")).toThrow(RectangleException);
});

//negative case 3
test("should throw an RectangleException for an negative inputs", () => {
  expect(() => calcRectangleArea(-4, 2)).toThrow(RangeError);
});

//negative case 4
test("should throw an RectangleException for an null inputs", () => {
  expect(() => calcRectangleArea(0, 2)).toThrow(RangeError);
});
