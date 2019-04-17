// функція для генерування чисел
function generateNum(min,max){
    return parseInt(Math.random() * (max - min) + min);
}
module.exports.generateNum = generateNum;