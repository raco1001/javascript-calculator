class ExpressionParser {
    static operatorPrecedence = { "+": 1, "-": 1, "*": 2, "/": 2 };

    static parse(expression) {
        const tokens = expression.match(/-?\d+\.\(\d+\)|-?\d+\.\d+|-?\d+|\+|\-|\*|\/|\(|\)/g) || [];
        const outputQueue = [];
        const operatorStack = [];

        tokens.forEach((token, index) => {
            if (!isNaN(token)) {
                outputQueue.push(parseFloat(token));
            } else if (token === "(") {
                operatorStack.push(token);
            } else if (token === ")") {
                while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== "(") {
                    outputQueue.push(operatorStack.pop());
                }
                operatorStack.pop();
            } else if (["+", "-", "*", "/"].includes(token)) {
                if (token === "-" && (index === 0 || ["+", "-", "*", "/", "("].includes(tokens[index - 1]))) {
                    outputQueue.push(0); // 음수 처리
                }
                while (
                    operatorStack.length > 0 &&
                    this.operatorPrecedence[operatorStack[operatorStack.length - 1]] >= this.operatorPrecedence[token]
                ) {
                    outputQueue.push(operatorStack.pop());
                }
                operatorStack.push(token);
            }
        });

        while (operatorStack.length > 0) {
            outputQueue.push(operatorStack.pop());
        }

        return outputQueue;
    }
}

class PostfixEvaluator {
    static evaluate(postfixExpression) {
        const stack = [];
        const operations = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => (b === 0 ? new Error("Division by zero") : a / b),
        };

        postfixExpression.forEach(token => {
            if (!isNaN(token)) {
                stack.push(token);
            } else {
                const [b, a] = [stack.pop(), stack.pop() || 0];
                stack.push(operations[token](a, b));
            }
        });

        return stack[0] || 0;
    }
}

class Formatter {
    static formatWithCommas(num) {
        return num.toLocaleString();
    }

    static formatExponential(num) {
        return Math.abs(num) >= 1e10 || (Math.abs(num) < 1e-4 && num !== 0)
            ? num.toExponential(5)
            : num.toFixed(10).replace(/\.?0+$/, "");
    }

    static formatResult(num) {
        const formatted = this.formatExponential(num);
        return formatted.includes("e") ? formatted : this.formatWithCommas(formatted);
    }
}

class Calculator {
    static calculate(expression) {
        const postfixExpression = ExpressionParser.parse(expression.replace(/×/g, "*").replace(/÷/g, "/"));
        if (!postfixExpression.length) return "Invalid Expression";

        try {
            return Formatter.formatResult(PostfixEvaluator.evaluate(postfixExpression));
        } catch {
            return "Error";
        }
    }
}

class CalculatorUI {
    constructor() {
        this.expression = "";
        this.expressionDisplay = document.getElementById("expression");
        this.resultDisplay = document.getElementById("result");
        this.buttons = document.querySelectorAll("button");

        if (!this.expressionDisplay || !this.resultDisplay) {
            console.error("❌ UI 요소를 찾을 수 없습니다!");
            return;
        }

        this.initEventListeners();
    }

    updateExpressionDisplay() {
        this.expressionDisplay.textContent = this.expression || "0";
    }

    handleNumberInput(num) {
        this.expression += num;
        this.updateExpressionDisplay();
    }

    handleOperatorInput(op) {
        if (op === "-" && (this.expression === "" || this.expression.endsWith("(") || this.expression.endsWith(" "))) {
            this.expression += op; // 음수 입력
        } else {
            this.expression += ` ${op} `;
        }
        this.updateExpressionDisplay();
    }

    handleDotInput() {
        const lastNumber = this.expression.split(/[\+\-\×\÷\*\/]/).pop();
        if (!lastNumber.includes(".")) {
            this.expression += lastNumber === "" ? "0." : ".";
            this.updateExpressionDisplay();
        }
    }

    handleBackspace() {
        this.expression = this.expression.slice(0, -1);
        this.updateExpressionDisplay();
    }

    handleClear() {
        this.expression = "";
        this.expressionDisplay.textContent = "0";
        this.resultDisplay.textContent = "0";
    }

    handleEquals() {
        this.resultDisplay.textContent = Calculator.calculate(this.expression);
    }

    initEventListeners() {
        this.buttons.forEach(button => {
            button.addEventListener("click", () => {
                const num = button.getAttribute("data-num");
                const op = button.getAttribute("data-op");

                if (num !== null) this.handleNumberInput(num);
                else if (op !== null) this.handleOperatorInput(op);
                else if (button.id === "dot") this.handleDotInput();
                else if (button.id === "clear") this.handleClear();
                else if (button.id === "backspace") this.handleBackspace();
                else if (button.id === "equals") this.handleEquals();
            });
        });
    }
}

document.addEventListener("DOMContentLoaded", () => new CalculatorUI());
