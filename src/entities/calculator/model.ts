import { CalculatorState, Token } from "./types";

export class Calculator {
    private state: CalculatorState = { expression: "", history: [] };

    appendToken(token: Token): void {
        this.state.expression += token.type === "Number" ? token.value : ` ${token.value} `;
    }

    clear(): void {
        this.state = { expression: "", history: [] };
    }

    getExpression(): string {
        return this.state.expression;
    }
}
