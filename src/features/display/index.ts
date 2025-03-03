import { Calculator } from "../../entities/calculator"; // ✅ index.ts에서 import

export function updateDisplay(calculator: Calculator) {
    document.getElementById("expression")!.innerText = calculator.getExpression();
}
