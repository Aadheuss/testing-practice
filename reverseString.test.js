import reverseString from "./reverseString";

test(`The string "test" will be reversed into "tset"`, () => {
  expect(reverseString("test")).toMatch(/^tset$/);
});

test(`The string "My name" will be reversed into "eman yM"`, () => {
  expect(reverseString("My name")).toMatch(/^eman yM$/);
});

test(`If no argument given return null`, () => {
  expect(reverseString()).toBeNull();
});

test(`If an empty string is given return empty string`, () => {
  expect(reverseString("")).toMatch("");
});
