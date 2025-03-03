import { Token } from "../entities/calculator/types";

export function tokenize(input: string): Token[] {
    const tokens: Token[] = [];
    const regex = /\d+(\.\d+)?|[+\-*/]/g;
    const matches = input.match(regex);

    if (matches) {
        for (const match of matches) {
            if (!isNaN(Number(match))) {
                tokens.push({ type: "Number", value: Number(match) });
            } else {
                tokens.push({ type: "Operator", value: match as "+" | "-" | "*" | "/" });
            }
        }
    }
    return tokens;
}
