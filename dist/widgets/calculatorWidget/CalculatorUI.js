import { Calculator } from "../../entities/calculator/Calculator.js";
export class CalculatorUI {
    expression = "";
    expressionDisplay;
    resultDisplay;
    buttonsContainer;
    constructor() {
        this.expressionDisplay = document.getElementById("expression");
        this.resultDisplay = document.getElementById("result");
        this.buttonsContainer = document.querySelector(".buttons");
        if (!this.expressionDisplay || !this.resultDisplay || !this.buttonsContainer) {
            console.error("UI 요소를 찾을 수 없습니다!");
            return;
        }
        this.initEventListeners();
    }
    updateExpressionDisplay() {
        if (this.expressionDisplay)
            this.expressionDisplay.textContent = this.expression || "0";
    }
    handleInput(input) {
        this.expression += input;
        this.updateExpressionDisplay();
    }
    handleClear() {
        this.expression = "";
        this.updateExpressionDisplay();
        if (this.resultDisplay)
            this.resultDisplay.textContent = "0";
    }
    handleEquals() {
        if (this.resultDisplay)
            this.resultDisplay.textContent = Calculator.calculate(this.expression);
    }
    handleBackspace() {
        this.expression = this.expression.slice(0, -1);
        this.updateExpressionDisplay();
    }
    processInput(input) {
        const operators = ["+", "-", "*", "/"];
        if (!isNaN(Number(input))) {
            this.handleInput(input);
        }
        else if (operators.includes(input)) {
            this.handleInput(` ${input} `);
        }
        else if (input === "Enter" || input === "=") {
            this.handleEquals();
        }
        else if (input === "Backspace") {
            this.handleBackspace();
        }
        else if (input === "Escape" || input.toLowerCase() === "c") {
            this.handleClear();
        }
    }
    initEventListeners() {
        this.buttonsContainer.addEventListener("click", (event) => {
            const target = event.target;
            const num = target.getAttribute("data-num");
            const op = target.getAttribute("data-op");
            if (num)
                this.handleInput(num);
            else if (op)
                this.handleInput(` ${op} `);
            else if (target.id === "clear")
                this.handleClear();
            else if (target.id === "equals")
                this.handleEquals();
        });
        document.addEventListener("keydown", (event) => {
            this.processInput(event.key);
        });
    }
}
