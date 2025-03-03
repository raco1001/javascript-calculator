export class OperatorPrecedence {
    static readonly precedence: Record<string, number> = {
        "+": 1, "-": 1, "*": 2, "/": 2
    };

    static compare(op1: string, op2: string): boolean {
        return (this.precedence[op1] || 0) >= (this.precedence[op2] || 0);
    }
}
