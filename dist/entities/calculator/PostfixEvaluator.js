export class PostfixEvaluator {
    static operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => {
            if (b === 0)
                throw new Error("Cannot divide by zero");
            return a / b;
        },
    };
    static evaluate(postfixExpression) {
        const stack = [];
        postfixExpression.forEach(token => {
            if (typeof token === "number") {
                stack.push(token);
            }
            else {
                const b = stack.pop() ?? 0;
                const a = stack.pop() ?? 0;
                stack.push(this.operations[token](a, b));
            }
        });
        return stack[0] ?? 0;
    }
}
