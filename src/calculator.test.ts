import { Calculator } from "./calculator.js";

describe("Calculator", () => {
    let calc: Calculator;

    beforeEach(() => {
        calc = new Calculator();
    });

    test("Addition", () => {
        calc.appendNumber("2");
        calc.appendOperator("+");
        calc.appendNumber("3");
        expect(calc.evaluate()).toBe("5");
    });

    test("Multiplication", () => {
        calc.appendNumber("4");
        calc.appendOperator("*");
        calc.appendNumber("5");
        expect(calc.evaluate()).toBe("20");
    });

    test("Operator precedence", () => {
        calc.appendNumber("2");
        calc.appendOperator("+");
        calc.appendNumber("3");
        calc.appendOperator("*");
        calc.appendNumber("4");
        expect(calc.evaluate()).toBe("14"); // 2 + (3 * 4) = 14
    });

    test("Division by zero", () => {
        calc.appendNumber("10");
        calc.appendOperator("/");
        calc.appendNumber("0");
        expect(calc.evaluate()).toBe("Error");
    });

    test("Clear function", () => {
        calc.appendNumber("10");
        calc.clear();
        expect(calc.getExpression()).toBe("");
    });
});
