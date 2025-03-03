import { Token } from "../entities/calculator/types";

export function shuntingYard(tokens: Token[]): Token[] {
    const output: Token[] = [];
    const operatorStack: Token[] = [];

    for (const token of tokens) {
        if (token.type === "Number") {
            output.push(token);
        } else {
            while (operatorStack.length && operatorStack[operatorStack.length - 1].type === "Operator") {
                output.push(operatorStack.pop()!);
            }
            operatorStack.push(token);
        }
    }

    while (operatorStack.length) {
        output.push(operatorStack.pop()!);
    }

    return output;
}
