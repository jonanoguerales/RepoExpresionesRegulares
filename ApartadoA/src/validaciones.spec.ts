import { comprobarIban, validarIban } from "./validaciones";

describe("validaciones iban", () => {
  test.each([
    ["ES21 1465 0100 72 2030876293", true],
    ["ES2114650100722030876293", true],
    ["ES21-1465-0100-72-2030876293", true],
    ["ES6621000418401234567891", true],
    ["ES9121000418450200051336234234", false],
    ["ES9121000418 4502000513 37", false],
  ])(
    "Debería devolver %s cuando el valor es %s",
    (iban: string, expected: boolean) => {
      expect(comprobarIban(iban)).toBe(expected);
    }
  );
});
describe("validaciones iban", () => {
  test.each([
    ["ES21 1465 0100 72 2030876293", false],
    ["ES2114650100722030876293", false],
    ["ES21-1465-0100-72-2030876293", false],
    ["ES6621000418401234567891", true],
    ["ES9121000418450200051336234234", false],
    ["ES9121000418 4502000513 37", false],
  ])(
    "Debería devolver %s cuando el valor es %s",
    (iban: string, expected: boolean) => {
      expect(validarIban(iban)).toBe(expected);
    }
  );
});
