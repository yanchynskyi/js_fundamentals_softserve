const {
  InputException,
  validateName,
  validateAge,
  validateStatus,
  checkAge,
} = require("./task2");

module.exports = {
  InputException,
  validateName,
  validateAge,
  validateStatus,
  checkAge,
};

//tests for validateName
describe("validateName", () => {
  test("should return true for a valid name", () => {
    expect(validateName("John Doe")).toBe(true);
  });

  test("should throw an InputException for an invalid name", () => {
    expect(() => validateName("John Doe1")).toThrow(InputException);
  });
});

//tests for validateAge
describe("validateAge", () => {
  test("should return true for a valid age", () => {
    expect(validateAge("25")).toBe(true);
  });

  test("should throw an InputException for an empty age", () => {
    expect(() => validateAge("")).toThrow(InputException);
  });

  test("should throw a RangeError for an age below 18", () => {
    expect(() => validateAge("17")).toThrow(RangeError);
  });

  test("should throw a RangeError for an age above 70", () => {
    expect(() => validateAge("71")).toThrow(RangeError);
  });

  test("should throw an InputException for a non-numeric age", () => {
    expect(() => validateAge("abc")).toThrow(InputException);
  });
});

//tests for validateStatus
describe("validateStatus", () => {
  test("should return true for a status admin", () => {
    expect(validateStatus("admin")).toBe(true);
  });

  test("should return true for a status user", () => {
    expect(validateStatus("user")).toBe(true);
  });

  test("should return true for a status moderator", () => {
    expect(validateStatus("moderator")).toBe(true);
  });

  test("should throw an EvalError for an incorrect status", () => {
    expect(() => validateStatus("test")).toThrow(EvalError);
  });

  test("should throw an EvalError for an empty status", () => {
    expect(() => validateStatus("")).toThrow(EvalError);
  });
});

//tests for checkAge
describe("checkAge", () => {
  test("should return true for a correct values", () => {
    expect(checkAge("John", 40, "admin")).toBe(true);
  });

  test("should throw an InputException for an empty name", () => {
    expect(() => checkAge("", "test", "admin")).toThrow(InputException);
  });

  test("should throw an InputException for an non numeric age", () => {
    expect(() => checkAge("John", "test", "admin")).toThrow(InputException);
  });

  test("should throw an InputException for an empty age", () => {
    expect(() => checkAge("John", "", "admin")).toThrow(InputException);
  });

  test("should throw an InputException for an out of range(lower) age ", () => {
    expect(() => checkAge("John", 0, "admin")).toThrow(RangeError);
  });

  test("should throw an InputException for an out of range(upper) age ", () => {
    expect(() => checkAge("John", 0, "admin")).toThrow(RangeError);
  });

  test("should throw an EvalError for an empty status", () => {
    expect(() => validateStatus("")).toThrow(EvalError);
  });

  test("should throw an EvalError for an incorrect status", () => {
    expect(() => validateStatus("")).toThrow(EvalError);
  });
});
