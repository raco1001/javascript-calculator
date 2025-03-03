import { OperatorPrecedence } from "./OperatorPrecedence.js";
import { Tokenizer } from "./Tokenizer.js";
export class ExpressionParser {
    static parse(expression) {
        const tokens = Tokenizer.tokenize(expression);
        const outputQueue = [];
        const operatorStack = [];
        tokens.forEach((token, index) => {
            if (!isNaN(Number(token))) {
                outputQueue.push(parseFloat(token));
            }
            else if (token === "(") {
                operatorStack.push(token);
            }
            else if (token === ")") {
                while (operatorStack.length && operatorStack[operatorStack.length - 1] !== "(") {
                    outputQueue.push(operatorStack.pop());
                }
                operatorStack.pop();
            }
            else {
                if (token === "-" && (index === 0 || ["+", "-", "*", "/", "("].includes(tokens[index - 1]))) {
                    outputQueue.push(0);
                }
                while (operatorStack.length &&
                    OperatorPrecedence.compare(operatorStack.at(-1), token)) {
                    outputQueue.push(operatorStack.pop());
                }
                operatorStack.push(token);
            }
        });
        while (operatorStack.length) {
            outputQueue.push(operatorStack.pop());
        }
        return outputQueue;
    }
}
