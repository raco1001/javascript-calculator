import { tokenize } from "./shared/tokenizer";
import { shuntingYard } from "./shared/shuntingYard";
import { evaluateRPN } from "./shared/evaluator";

export class Calculator {
    private expression: string = "";

    appendInput(value: string): void {
        this.expression += value;
    }

    evaluate(): number {
        const tokens = tokenize(this.expression);
        const rpn = shuntingYard(tokens);
        return evaluateRPN(rpn);
    }

    clear(): void {
        this.expression = "";
    }

    getExpression(): string {
        return this.expression;
    }
}
