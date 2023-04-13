function mul(...args) {
  const numbers = args.filter((arg) => typeof arg === "number");
  if (numbers.length === 0) {
    return 0;
  }
  return numbers.reduce((acc, val) => acc * val);
}

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0
