import { Calculator } from "../entities/calculator/Calculator";

describe("Calculator", () => {
    test("간단한 연산", () => {
        expect(Calculator.calculate("3 + 5")).toBe("8");
    });

    test("연산자 우선순위 적용", () => {
        expect(Calculator.calculate("3 + 5 * 2")).toBe("13");
    });

    test("괄호 적용 연산", () => {
        expect(Calculator.calculate("(3 + 5) * 2")).toBe("16");
    });

    test("음수 숫자 연산", () => {
        expect(Calculator.calculate("-3 + 5")).toBe("2");
    });

    test("복잡한 수식 계산", () => {
        expect(Calculator.calculate("(3 + 5) * (2 - 1) / 2")).toBe("4");
    });

    test("0으로 나누기 예외", () => {
        expect(Calculator.calculate("5 / 0")).toBe("Cannot divide by zero");
    });

    test("다양한 연산 조합 테스트", () => {
        expect(Calculator.calculate("10 + 2 * 6")).toBe("22");
        expect(Calculator.calculate("100 / (5 + 5)")).toBe("10");
        expect(Calculator.calculate("10 + 2 * (6 / 3)")).toBe("14");
        expect(Calculator.calculate("(10 + 2) * (6 / 3)")).toBe("24");
    });
});
