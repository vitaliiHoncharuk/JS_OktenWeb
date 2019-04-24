let basicOperations = require("./basicOperations");
let hardOperations = require("./HardOperations");
try {
    let c = basicOperations.add(4, 4);
    console.log(c);

    let k = hardOperations.floorOneNum(hardOperations.exp(3));
    console.log(k);
}
catch (el) {
    console.log("****************");
    console.log(e.message);
    console.log("****************");
}

