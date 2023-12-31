import calculator from "./calculator";

test("1 + 2 is equal to 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test(`1 + "lol" returns error`, () => {
  expect(calculator.add(1, "lol")).toMatch(/^ERROR!$/);
});

test(`"lol" + 2 returns error`, () => {
  expect(calculator.add(1, "lol")).toMatch(/^ERROR!$/);
});

test("0.1 + 0.2 is equal to 0.3", () => {
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("1 - 2 is equal to -1", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test(`1 - "lol" returns error`, () => {
  expect(calculator.subtract(1, "lol")).toMatch(/^ERROR!$/);
});

test(`"lol" - 2 returns error`, () => {
  expect(calculator.subtract(1, "lol")).toMatch(/^ERROR!$/);
});

test("0.1 - 0.2 is equal to 0.3", () => {
  expect(calculator.subtract(0.1, 0.2)).toBeCloseTo(-0.1);
});

test("1 * 2 is equal to 2", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test(`1 * "lol" returns error`, () => {
  expect(calculator.multiply(1, "lol")).toMatch(/^ERROR!$/);
});

test(`"lol" * 2 returns error`, () => {
  expect(calculator.multiply(1, "lol")).toMatch(/^ERROR!$/);
});

test("0 * 0 is equal to 0", () => {
  expect(calculator.multiply(0, 0)).toBe(0);
});

test("9 * 0 is equal to 0", () => {
  expect(calculator.multiply(9, 0)).toBe(0);
});

test("0.9 * -0.2 is equal to 0.18", () => {
  expect(calculator.multiply(0.9, -0.2)).toBeCloseTo(-0.18);
});

test("9 / 3 is equal to 2", () => {
  expect(calculator.divide(9, 3)).toBe(3);
});

test(`1 / "lol" returns error`, () => {
  expect(calculator.divide(1, "lol")).toMatch(/^ERROR!$/);
});

test(`"lol" / 2 returns error`, () => {
  expect(calculator.divide(1, "lol")).toMatch(/^ERROR!$/);
});

test("0 / 9 is equal is equal 0", () => {
  expect(calculator.divide(0, 9)).toBe(0);
});

test("9 / 0 returns an error", () => {
  expect(calculator.divide(9, 0)).toMatch(/^ERROR!$/);
});

test("-0.5 / 0.25 is equal is -2 ", () => {
  expect(calculator.divide(-0.5, 0.25)).toBeCloseTo(-2);
});
