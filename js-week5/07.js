// 클래스 연습해보기

// [요구사항]
// 1. Car라는 새로운 클래스를 만들고, 처음 객체를 만들 때는
//          다음 네 개의 값이 필수로 입력되야 합니다!
//          (1) modelName
//          (2) modelYear
//          (3) type
//          (4) price
// 2. makeNoise() 메서드를 만들어 클락션을 출력해주세요.
// 2-1 . 해당 자동차가 몇 년도 모델인지 출력하는 메서드 작성.
// 3. 이후 자동차를 3개 정도 만들어 주세요(객체 생성)


// [추가 요구사항]
// 1. 전기차 클래스 <= Car 클래스의 상속을 받을거에요


class Car {
    constructor(name, year, type, price) {
        this.name = name;
        this.year = year;
        this.type = type;
        this.price = price;
    }


    infoName() {
        console.log(`모델명: ${this.name}`)
    }
    infoYear() {
        console.log(`연식: ${this.year}`)
    }
    infoType() {
        console.log(`종류: ${this.type}`)
    }
    infoprice() {
        console.log(`가격: ${this.price}`)
    }
    makeNoise() {
        console.log(`${this.name} : 빵!`)
    }
}
// 전기차 class 정의
class ElectronicCar extends Car {
    constructor (name, year, price, chargeTime) {
        // Car(부모 class)에게도 알려주기!
        super(name, year, "e", price);
        this._chargeTime = chargeTime;
    }
    set chargeTime (value) {
        this._chargeTime = value;

    }
    get chargeTime () {
        this._chargeTime = value;
    }
}
const eleCar1 = new ElectronicCar("Tesla", "2023", 9000, 60);
eleCar1.makeNoise();
console.log("===================")
console.log(eleCar1._chargeTime);
eleCar1.chargeTime = 20;
console.log(eleCar1._chargeTime);

// const car1 = new Car("Porche911", "2021", "스포츠카", "300,000,000원");
// const car2 = new Car("Tesla_model3", "2022", "전기자동차", "70,000,000원");
// const car3 = new Car("G_Class", "2020", "SUV", "250,000,000원");

// console.log(car1);
// console.log(car2);
// console.log(car3);

// car1.infoName();
// car1.infoType()
// car1.infoYear()
// car1.infoprice()

