import { PostfixEvaluator } from "../entities/calculator/PostfixEvaluator";
describe("PostfixEvaluator", () => {
    test("단순 연산", () => {
        expect(PostfixEvaluator.evaluate([3, 5, "+"])).toBe(8);
    });
    test("연산자 우선순위 적용", () => {
        expect(PostfixEvaluator.evaluate([3, 5, 2, "*", "+"])).toBe(13);
    });
    test("괄호 적용 연산", () => {
        expect(PostfixEvaluator.evaluate([3, 5, "+", 2, "*"])).toBe(16);
    });
    test("음수 숫자 연산", () => {
        expect(PostfixEvaluator.evaluate([0, 3, "-", 5, "+"])).toBe(2);
    });
    test("0으로 나누기 예외", () => {
        expect(() => PostfixEvaluator.evaluate([5, 0, "/"])).toThrow("Cannot divide by zero");
    });
    test("복잡한 후위 연산 테스트", () => {
        expect(PostfixEvaluator.evaluate([10, 2, 6, 3, "/", "*", "+"])).toBe(14);
        expect(PostfixEvaluator.evaluate([10, 2, "+", 3, "*"])).toBe(36);
    });
});
