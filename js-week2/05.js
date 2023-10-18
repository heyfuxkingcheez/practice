// 일급객체로써의 함수 (2)
// 객체의 프로퍼티로 함수를 할당

// 함수는 객체의 프로퍼티로 할당 될 수 있음
// 객체의 메소드로 함수를 호출할 수 있다.
const person = {
    name: "john",
    age: 31,
    isMarried: true,
    sayHello: () => {
        console.log(`hello, my name is ${this.name}` );
    },
    // sayHello function () {
    //     console.log(`Hello, my name is ${this.name}`)
    // }

    // 화살표 함수(=>)는 this를 바인딩 하지 않는다.
    
};
person.sayHello(); //"Hello, my name is John"