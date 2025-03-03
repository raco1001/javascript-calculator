import { Calculator } from "../../entities/calculator"; 
import { updateDisplay } from "../display";
import { Token } from "../../entities/calculator/types";

export function setupInputListeners(calculator: Calculator) {
    document.querySelectorAll(".number, .operator").forEach(button => {
        button.addEventListener("click", (event) => {
            const target = event.target as HTMLElement;
            if (!target) return;

            const value = target.innerText;
            const token: Token = isNaN(Number(value)) 
                ? { type: "Operator", value: value as "+" | "-" | "*" | "/" } 
                : { type: "Number", value: Number(value) };

            calculator.appendToken(token);
            updateDisplay(calculator);
        });
    });

    const equalsButton = document.getElementById("equals");
    if (equalsButton) {
        equalsButton.addEventListener("click", () => {
            console.log("계산 실행 예정");
        });
    }

    const clearButton = document.getElementById("clear");
    if (clearButton) {
        clearButton.addEventListener("click", () => {
            calculator.clear();
            updateDisplay(calculator);
        });
    }
}