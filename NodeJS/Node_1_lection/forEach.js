function forEach(Arr, func) {
    for (let i = 0; i < Arr.length; i++) {
        func(Arr[i]);
    }
}

module.exports.forEach = forEach;