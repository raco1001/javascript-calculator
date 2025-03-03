export class Tokenizer {
    static tokenize(expression: string): string[] {
        return expression.match(/-?\d+\.\(\d+\)|-?\d+\.\d+|-?\d+|\+|\-|\*|\/|\(|\)/g) || [];
    }
}
