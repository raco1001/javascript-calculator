import { Calculator } from "../../calculator";

const calculator = new Calculator();

document.querySelectorAll(".number, .operator").forEach(button => {
    button.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;  // ✅ target을 HTMLElement로 단언
    if (!target) return;  // ✅ target이 null일 경우 이벤트 핸들러 종료
    calculator.appendInput(target.innerText );
});
});

document.getElementById("equals")!.addEventListener("click", () => {
    document.getElementById("result")!.innerText = calculator.evaluate().toString();
});


const clearButton = document.getElementById("clear");
if (clearButton) {
    clearButton.addEventListener("click", () => {
        calculator.clear();
        updateDisplay(calculator);
    });
}

export function updateDisplay(calculator: Calculator) {
    document.getElementById("expression")!.innerText = calculator.getExpression();
    document.getElementById("result")!.innerText = calculator.getExpression(); // 결과 값도 함께 업데이트
}
