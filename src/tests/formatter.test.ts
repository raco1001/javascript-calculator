import { Formatter } from "../entities/calculator/Formatter";

describe("Formatter", () => {
    test("천 단위 콤마 추가", () => {
        expect(Formatter.formatWithCommas(1000000)).toBe("1,000,000");
    });

    test("지수 표기법 변환", () => {
        expect(Formatter.formatExponential(100000000000)).toBe("1.00000e+11");
    });

    test("소수점 5자리 이하 그대로 표기", () => {
        expect(Formatter.formatResult(0.00001)).toBe("0.00001");
        expect(Formatter.formatResult(0.0001)).toBe("0.0001");
    });

    test("소수점 5자리 초과 시 지수 표기법 변환", () => {
        expect(Formatter.formatResult(0.000009999)).toBe("9.99900e-6");
        expect(Formatter.formatResult(0.0000001)).toBe("1.00000e-7");
    });
});
