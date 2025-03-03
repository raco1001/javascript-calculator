export type Token = { type: "Number"; value: number } | { type: "Operator"; value: "+" | "-" | "*" | "/" };

export interface CalculatorState {
    expression: string;
    history: string[];
}
