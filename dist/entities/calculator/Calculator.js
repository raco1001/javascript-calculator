import { ExpressionParser } from "./ExpressionParser.js";
import { PostfixEvaluator } from "./PostfixEvaluator.js";
import { Formatter } from "./Formatter.js";
export class Calculator {
    static calculate(expression) {
        const postfixExpression = ExpressionParser.parse(expression.replace(/×/g, "*").replace(/÷/g, "/"));
        if (!postfixExpression.length)
            return "Invalid Expression";
        try {
            const result = PostfixEvaluator.evaluate(postfixExpression);
            return Formatter.formatResult(result);
        }
        catch (error) {
            return error instanceof Error ? error.message : "Error";
        }
    }
}
