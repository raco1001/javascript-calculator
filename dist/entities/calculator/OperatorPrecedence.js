export class OperatorPrecedence {
    static precedence = {
        "+": 1, "-": 1, "*": 2, "/": 2
    };
    static compare(op1, op2) {
        return (this.precedence[op1] || 0) >= (this.precedence[op2] || 0);
    }
}
