export class Tokenizer {
    static tokenize(expression) {
        return expression.match(/-?\d+\.\(\d+\)|-?\d+\.\d+|-?\d+|\+|\-|\*|\/|\(|\)/g) || [];
    }
}
