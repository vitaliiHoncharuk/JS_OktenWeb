class Figure {
    constructor(name){
        this.name = name;
    }
}


class Square extends Figure{
    constructor(name,height){
        super(name);
        this.height = height;
    }
    calcArea (){
        return this.height * this.height;
    }

    get area(){
        return this.calcArea();
    }
    set setHeight(value){
        this.height = value;
    }

}


const  mySquare = new Square("mySquare",24);
mySquare.calcArea();
console.log(mySquare.area);
mySquare.setHeight = 30;
console.log(mySquare.area);


class Circle extends Figure{
    constructor(name,radius){
    super(name);
    this.radius = radius;
}
    calcArea (){
        return Math.pow(this.radius,2)*Math.PI;
    }

    calcLength () {
        return 2 * Math.PI * this.radius;
    }

    get area(){
        return this.calcArea();
    }
    get length(){
        return this.calcLength();
    }
    set setRadius(value){
        this.radius = value;
    }

}
let a = new Circle("MyCircle",5);
console.log(a.area);
console.log(a.length);
