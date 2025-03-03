import { ExpressionParser } from "../entities/calculator/ExpressionParser";
describe("ExpressionParser", () => {
    test("단순 연산 변환", () => {
        expect(ExpressionParser.parse("3 + 5")).toEqual([3, 5, "+"]);
    });
    test("연산자 우선순위 적용", () => {
        expect(ExpressionParser.parse("3 + 5 * 2")).toEqual([3, 5, 2, "*", "+"]);
    });
    test("괄호 우선순위 적용", () => {
        expect(ExpressionParser.parse("(3 + 5) * 2")).toEqual([3, 5, "+", 2, "*"]);
    });
    test("음수 숫자 처리", () => {
        expect(ExpressionParser.parse("-3 + 5")).toEqual([-3, 5, "+"]);
        expect(ExpressionParser.parse("10 + (-2)")).toEqual([10, -2, "+"]);
    });
    test("복잡한 수식 변환", () => {
        expect(ExpressionParser.parse("10 + 2 * (6 / 3)")).toEqual([10, 2, 6, 3, "/", "*", "+"]);
    });
});
