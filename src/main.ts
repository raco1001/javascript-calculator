import { Calculator } from "./calculator.js";

const calculator = new Calculator();
const expressionElement = document.getElementById("expression")!;
const resultElement = document.getElementById("result")!;
 
console.log("✅ main.ts가 실행되었습니다!");  

const numberButtons = document.querySelectorAll(".number");
console.log("🔍 숫자 버튼 개수:", numberButtons.length); 


function formatNumber(num: string | number): string {
    if (isNaN(Number(num))) return "Error";
    return Number(num).toLocaleString(); 
}

document.querySelectorAll(".number").forEach(button => {
    button.addEventListener("click", (event) => {
        const value = (event.target as HTMLButtonElement).getAttribute("data-num")!;
        calculator.appendNumber(value);
        updateDisplay();
    });
});

document.querySelectorAll(".operator").forEach(button => {
    button.addEventListener("click", (event) => {
        const value = (event.target as HTMLButtonElement).getAttribute("data-op")!;
        calculator.appendOperator(value);
        updateDisplay();
    });
});

document.getElementById("clear")!.addEventListener("click", () => {
    calculator.clear();
    updateDisplay();
});

document.getElementById("backspace")!.addEventListener("click", () => {
    calculator.deleteLast();
    updateDisplay();
});

document.getElementById("equals")!.addEventListener("click", () => {
    const result = calculator.evaluate();
    resultElement.innerText = result;
});


function updateDisplay() {
    expressionElement.innerText = calculator.getExpression();
    resultElement.innerText = formatNumber(calculator.evaluate());
}
