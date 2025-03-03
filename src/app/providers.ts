import { Calculator } from "../entities/calculator";
import { setupInputListeners } from "../features/input";
import { updateDisplay } from "../features/display";  

const calculator = new Calculator();
setupInputListeners(calculator);
updateDisplay(calculator);
