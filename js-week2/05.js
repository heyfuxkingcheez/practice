// 일급객체로써의 함수 (2)
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
person.sayHello();