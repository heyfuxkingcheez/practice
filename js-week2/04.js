// 일급 객체로서의 함수
// 다른 객체들이 일반적으로 적용 가능한 연산을 지원하는 객체
// 그렇기 때문에 다른 프로그램과 달리 함수가 매우 유연함.


// (1) 뱐수에 함수를 할당할 수 있다.
// 함수가 마치 값으로 간주된다.
// 함수가 나중에 사용될 수 있도록 조치가 되었다.
const sayHello = function () {
    console.log('Hello!');
};

sayHello(); // "Hello!" 출력 


// (2) 함수를 인자로 다른 함수에 전달할 수가 있다.
// (2)-1 콜백함수  : 매개변수로써 쓰이는 경우
// (2)-2 고차함수  : 함수를 인자로 받거나 return하는 함수
function callFunction(func) {
    // 매개변수로 받은 변수가, 사실 함수다
    func();
}

const sayHello1 = function () {
    console.log("Hello!");

};
callFunction(sayHello1); // "Hello 출력"

// (3) 함수를 반환할 수 있다.
function createAdder(num) {
    return function (x) {
        return x + num;
    }
}

const addFive = function(x) {
    return x + 5;

};
console.log(addFive(10)); // 15출력
