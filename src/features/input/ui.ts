import { CalculatorState, Token } from "../../entities/calculator/types";

export class CalculatorModel {
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
