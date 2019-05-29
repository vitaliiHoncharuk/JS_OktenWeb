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

class Car  {
    constructor(public mark:string,protected engine:number,protected price:number,protected year?:number){
    }
    getInfo():void{
        console.log("The car model is "+ this.mark+", with "+this.engine+", "+this.year+" year and it's price is "+this.price+" $");
    }
}

const MARKS:string[] = ["Honda","Mersedes","Maybah","BMW","Fiat","Kia","Porshe","Volkswagen","Moskvich","Mitsubishi"];
const OWNER_names:string[] = ["Vitalii","Oleksiy","Tanya","Olenka","Oleg","Vitya","Volodya","Roman","Viktor","Sadam"];


class SuperCar extends Car{
    constructor(mark,engine,price,year,public ownerName:string,ownerAge:number,ownerExperience:number){
        super(mark,engine,price,year);
    }

}
let myCar:any = new Car(MARKS[1],3.0,15,1995);
console.log(myCar);
myCar.getInfo();
                            //отут замість MARKS[1],3.0,15,1995 я хотів щоб просто можна було написати типу myCar
let MySuperCar = new SuperCar(MARKS[1],3.0,15,1995,"Vitalii",23,3);
console.log(MySuperCar);
