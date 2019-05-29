// 1.создать класс которы описывает машину. класс должен содержать 5-6 полей и функцию info()
// которая выводит инфрмацию про экземпляр класса (объект который вы создали)
// создать 10 различных экземпляров
// 2. Унаследовать класс Car в классе SuperCar. Добавить 3 новых поля.
//     создать 10 различных экземпляров
//
//
// на основе предыдущего задания создать классы которые описывают
// - Продукт
// - категорию
// - Магазин
//
//
// 1
// Протокол пошуку попелюшки
// створити класс попелюшка з полями ім'я, вік, розмір ноги
// Створити 10 попелюшок
// Сторити об'єкт класу "принц" який має поля ім'я, вік, туфелька яку він знайшов.
//     Знайти яка попелюшка його)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(mark, engine, price, year) {
        this.mark = mark;
        this.engine = engine;
        this.price = price;
        this.year = year;
    }
    Car.prototype.getInfo = function () {
        console.log("The car model is " + this.mark + ", with " + this.engine + ", " + this.year + " year and it's price is " + this.price + " $");
    };
    return Car;
}());
var MARKS = ["Honda", "Mersedes", "Maybah", "BMW", "Fiat", "Kia", "Porshe", "Volkswagen", "Moskvich", "Mitsubishi"];
var OWNER_names = ["Vitalii", "Oleksiy", "Tanya", "Olenka", "Oleg", "Vitya", "Volodya", "Roman", "Viktor", "Sadam"];
var SuperCar = /** @class */ (function (_super) {
    __extends(SuperCar, _super);
    function SuperCar(Car, ownerName, ownerAge, ownerExperience) {
        var _this = _super.call(this, Car.mark, Car.engine, Car.price, Car.year) || this;
        _this.ownerName = ownerName;
        return _this;
    }
    return SuperCar;
}(Car));
var myCar = new Car(MARKS[1], 3.0, 15, 1995);
console.log(myCar);
myCar.getInfo();
//отут замість MARKS[1],3.0,15,1995 я хотів щоб просто можна було написати типу myCar
var mySuperCar = new SuperCar(myCar, "Vitalii", 23, 3);
console.log(mySuperCar);
