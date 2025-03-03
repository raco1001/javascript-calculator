export class Formatter {
    static formatWithCommas(num: number): string {
        return num.toLocaleString();
    }

    static formatExponential(num: number): string {
        return Math.abs(num) >= 1e10 || (Math.abs(num) < 1e-4 && num !== 0)
            ? num.toExponential(5)
            : num.toFixed(10).replace(/\.?0+$/, "");
    }

    static formatResult(num: number): string {
    if (num === 0) return "0"; 
    if (Math.abs(num) < 1e-5) {
        return num.toExponential(5); 
    }
        return num.toString(); 
    }


}
