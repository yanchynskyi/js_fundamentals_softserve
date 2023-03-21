const { MonthException, showMonthName } = require("./task4");

module.exports = {
  MonthException,
  showMonthName,
};

//happy path
test("should return correct result with valid month", () => {
  expect(showMonthName(3)).toBe("March");
});

//negative case
test("should throw an RectangleException for an empty inputs", () => {
  expect(() => showMonthName(13)).toThrow(MonthException);
});
