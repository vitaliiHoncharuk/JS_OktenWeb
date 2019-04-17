function getTransformedArray(Arr, func) {
    let newTransformedArray = [];

    function pushElem(elem) {
        newTransformedArray.push(func(elem));
    }
    
    arrForEach.forEach(Arr, pushElem);
    return newTransformedArray;
}

module.exports.getTransformedArray = getTransformedArray;
let arrForEach = require("./forEach");
