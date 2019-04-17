function getFilteredArray(Arr, predicateFunc) {
    let newFilteredArray = [];
    for (let i = 0; i < Arr.length; i++) {
        const predicateFuncElement = predicateFunc[i];

    }
    arrForEach.forEach(Arr, function (elem) {
        if (predicateFunc(elem)) {
            newFilteredArray.push(elem);
        }
    });
    return newFilteredArray;
}
module.exports.getFilteredArray = getFilteredArray;
let arrForEach = require("./forEach");