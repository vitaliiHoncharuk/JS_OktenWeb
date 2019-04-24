function getFilteredArray(Arr, predicateFunc) {
    let newFilteredArray = [];
    arrForEach.forEach(Arr, function (elem) {
        if (predicateFunc(elem)) {
            newFilteredArray.push(elem);
        }
    });
    return newFilteredArray;
}
module.exports.getFilteredArray = getFilteredArray;
let arrForEach = require("./forEach");