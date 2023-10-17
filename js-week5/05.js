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
// 1. modelName, modelYear, type, price를 가져오는 메서드
// 2. modelName, modelYear, type, price를 세팅하는 메서드
// 3. 만든 인스턴스를 통해서 마지막에 set 해서 get 하는 로직까지

class Car {
    constructor(name, year, type, price) {
        this.name = name;
        this.year = year;
        this.type = type;
        this.price = price;
    }
// name 위한 getter
get name() {
    return this._name;
}
// name 위한 setter
set name(value) {
    // 검증 1 : value가 음수이면 오류!
    if (value.length <= 0) {
        console.log('[오류] : 빈칸이면 안됩니다!')
        return;
    } else if (typeof value !== "string") {
        console.log('[오류] : 모델명이 문자타입이 아닙니다.!')
        return;
    }
    this._name = value;
}
// year 위한 getter
get year() {
    return this._year;
}
// year 위한 setter
set year(value) {
    // 년도에 대한 유효성 검증 로직 ---> 구글링하면 엄청 많이 나옴
    if (value.length < 4) {
        console.log('[오류] : 연식이 네자리가 아니면 안됩니다.')
        return;
    } else if (typeof value !== "string") {
        console.log('[오류] : 연식이 문자타입이 아닙니다.!')
        return;
    }
    this._year = value;
}
// type 위한 getter
get type() {
    return this._type;
}
// type 위한 setter
set type(value) {
    // 검증 1 : g(가솔린), d(디젤), e(전기)가 아닐때 오류!
    if (value.length <= 0) {
        console.log('[오류] : 입력된 값이 없습니다.')
    }
    else if (value !== 'g' && value !== 'd' && value !== 'e') {
        console.log('[오류] : 가솔린, 디젤, 전기 중 어느 타입도 아닙니다.')
        return;
    } else if (typeof value !== 'string') {
        console.log('[오류] : 타입으로 입력된 값이 문자타입이 아닙니다.!')
        return;
    }
    this._type = value;
}
// price 위한 getter
get price() {
    return this._price;
}
// price 위한 setter
set price(value) {
    // 검증 1 : value가 음수이면 오류!
    if (typeof value !== "number") {
        console.log('[오류] : 가격으로 입력된 값이 숫자타입이 아닙니다.!')
        return;
    } else if (value <= "1000000") {
        console.log('[오류] : 자동차의 가격은 100만원보다 작을 수 없습니다.!')
        return;
    }
    this._price = value;
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
}



const car1 = new Car("Porche911", "2021", "g", '3000000');
const car2 = new Car("Tesla_model3", "2022", "e", "700000");
const car3 = new Car("G_Class", "2020", "d", "2500000");

// console.log(car1);
// console.log(car2);
// console.log(car3);

// car1.infoName();
// car1.infoType()
// car1.infoYear()
// car1.infoprice()

// getters 예시
console.log(car1.name);
// setters 예시
car1.name = "1";
console.log(car1.name);

