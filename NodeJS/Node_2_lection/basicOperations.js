    module.exports.add = add;
    module.exports.subtract = subtract;
    module.exports.divide = divide;
    module.exports.multiply = multiply;

    function add(a, b) {
        if (typeof (a) === "number" && typeof (b) === "number") return a + b;
        else
            throw new Error("Please,type in numbers only!");

    }

    function subtract(a, b) {
        if (typeof (a) === "number" && typeof (b) === "number") return a - b;
        else
            throw new SyntaxError("Please,type in numbers only!");

    }

    function divide(a, b) {
        if (typeof (a) === "number" && typeof (b) === "number") return a % b;
        else throw new SyntaxError("Please,type in numbers only!");

    }

    function multiply(a, b) {
        if (typeof (a) === "number" && typeof (b) === "number") return a * b;
        else
            throw new SyntaxError("Please,type in numbers only!");

    }
