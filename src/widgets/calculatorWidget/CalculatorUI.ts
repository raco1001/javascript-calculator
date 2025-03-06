import { Calculator } from "../../entities/calculator/Calculator";

export class CalculatorUI {
    private expression: string = "";
    private expressionDisplay: HTMLElement | null;
    private resultDisplay: HTMLElement | null;
    private buttonsContainer: HTMLElement | null;

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

    private updateExpressionDisplay(): void {
        if (this.expressionDisplay) this.expressionDisplay.textContent = this.expression || "0";
    }

    private handleInput(input: string): void {
        this.expression += input;
        this.updateExpressionDisplay();
    }

    private handleClear(): void {
        this.expression = "";
        this.updateExpressionDisplay();
        if (this.resultDisplay) this.resultDisplay.textContent = "0";
    }

    private handleEquals(): void {
        if (this.resultDisplay) this.resultDisplay.textContent = Calculator.calculate(this.expression);
    }

    private handleBackspace(): void {
        this.expression = this.expression.slice(0, -1);
        this.updateExpressionDisplay();
    }

    private processInput(input: string): void {
        const operators = ["+", "-", "*", "/"];

        if (!isNaN(Number(input))) {
            this.handleInput(input); 
        } else if (operators.includes(input)) {
            this.handleInput(` ${input} `); 
        } else if (input === "Enter" || input === "=") {
            this.handleEquals(); 
        } else if (input === "Backspace") {
            this.handleBackspace(); 
        } else if (input === "Escape" || input.toLowerCase() === "c") {
            this.handleClear(); 
        }
    }

    private handleDecimalInput(): void {
        const parts = this.expression.split(/[\+\-\*\/]/);
        const lastPart = parts[parts.length - 1];
        
        if (!lastPart.includes(".")) {
            if (lastPart === "") {
                this.handleInput("0.");
            } else {
                this.handleInput(".");
            }
        }
    }

    private handleOperatorInput(op: string): void {
        if (this.expression === "") return;
        if (this.expression.slice(-1) === " ") return;
        this.handleInput(` ${op} `);
    }
    
    private initEventListeners(): void {

        this.buttonsContainer!.addEventListener("click", (event) => {
            const target = event.target as HTMLElement;
            const num = target.getAttribute("data-num");
            const op = target.getAttribute("data-op");

            if (num) this.handleInput(num);
            else if (op) this.handleOperatorInput(` ${op} `);
            else if (target.id === "clear") this.handleClear();
            else if (target.id === "dot") this.handleDecimalInput();
            else if (target.id === "equals") this.handleEquals();
        });


        document.addEventListener("keydown", (event) => {
            this.processInput(event.key);
        });
    }
}
