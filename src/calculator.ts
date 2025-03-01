export class Calculator {
    private expression: string = "";

    appendNumber(num: string) {
        this.expression += num;
    }

    appendOperator(operator: string) {
        if (this.expression.length > 0 && !"+-*/".includes(this.expression.slice(-1))) {
            this.expression += ` ${operator} `;
        }
    }

    deleteLast() {
        this.expression = this.expression.trim().slice(0, -1);
    }

    clear() {
        this.expression = "";
    }

    getExpression(): string {
        return this.expression;
    }

    evaluate(): string {
        try {
            const tokens = this.tokenizeExpression(this.expression);
            const rpn = this.convertToRPN(tokens);
            return this.evaluateRPN(rpn).toString();
        } catch (error) {
            return "Error";
        }
    }


    private tokenizeExpression(expression: string): (string | number)[] {
        const regex = /\d+(\.\d+)?|[+\-*/]/g;
        return expression.match(regex)!.map(token => (isNaN(Number(token)) ? token : Number(token)));
    }


    private convertToRPN(tokens: (string | number)[]): (string | number)[] {
        const precedence: { [key: string]: number } = { "+": 1, "-": 1, "*": 2, "/": 2 };
        const output: (string | number)[] = [];
        const operators: string[] = [];

        tokens.forEach(token => {
            if (typeof token === "number") {
                output.push(token);
            } else {
                while (
                    operators.length &&
                    precedence[operators[operators.length - 1]] >= precedence[token]
                ) {
                    output.push(operators.pop()!);
                }
                operators.push(token);
            }
        });

        return [...output, ...operators.reverse()];
    }

    private evaluateRPN(rpn: (string | number)[]): string {
    const stack: number[] = [];

    rpn.forEach(token => {
        if (typeof token === "number") {
            stack.push(token);
        } else {
            const b = stack.pop()!;
            const a = stack.pop()!;

            if (token === "/" && b === 0) {
                stack.push(NaN); 
                return; 
            }

            switch (token) {
                case "+": stack.push(a + b); break;
                case "-": stack.push(a - b); break;
                case "*": stack.push(a * b); break;
                case "/": stack.push(a / b); break;
            }
        }
    });

    const result = stack.pop();
    return isNaN(result!) ? "Error" : result!.toString(); // NaN이 나오면 "Error" 반환
}

}
