import { Token } from "../entities/calculator/types";

export function evaluateRPN(tokens: Token[]): number {
    const stack: number[] = [];

    for (const token of tokens) {
        if (token.type === "Number") {
            stack.push(token.value);
        } else {
            const b = stack.pop()!;
            const a = stack.pop()!;
            switch (token.value) {
                case "+":
                    stack.push(a + b);
                    break;
                case "-":
                    stack.push(a - b);
                    break;
                case "*":
                    stack.push(a * b);
                    break;
                case "/":
                    stack.push(a / b);
                    break;
            }
        }
    }
    return stack.pop()!;
}
