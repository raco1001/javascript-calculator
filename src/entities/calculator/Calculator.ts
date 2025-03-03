import { ExpressionParser } from "./ExpressionParser";
import { PostfixEvaluator } from "./PostfixEvaluator";
import { Formatter } from "./Formatter";


export class Calculator {
    static calculate(expression: string): string {
        const postfixExpression = ExpressionParser.parse(
            expression.replace(/×/g, "*").replace(/÷/g, "/")
        );

        if (!postfixExpression.length) return "Invalid Expression";

        try {
            const result = PostfixEvaluator.evaluate(postfixExpression);
            return Formatter.formatResult(result);
        } catch (error) {
            return error instanceof Error ? error.message : "Error";
        }
    }
}
