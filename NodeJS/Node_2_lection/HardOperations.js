module.exports.pow = pow;
module.exports.square = square;
module.exports.exp = exp;
module.exports.floorOneNum = floorOneNum;


function pow(a,b) {
    if(typeof (a) === "number" && typeof (b) === "number") return Math.pow(a,b);
    else
        throw new SyntaxError("Please,type in numbers only!");
}
function square(a) {
    if(typeof (a) === "number") return a*a;
    else
        throw new SyntaxError("Please,type in numbers only!");
}
function exp(a) {
    if(typeof (a) === "number") return Math.exp(a);
    else
        throw new SyntaxError("Please,type in numbers only!");
}

function floorOneNum(a) {
    return Math.floor(a);
}


