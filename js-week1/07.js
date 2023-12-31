// 함수 = functuon(기능)
// input, output

// 1. 함수 선언문
// function add (매개변수) {
//     // 함수 내부에서 실행할 로직
// }

// 두 개의 숫자를 입력 받아서 덧셈을 한 후 내보내는 함수
function add (x, y) {
    return x + y;
}

// 2. 함수 표현식
let add2 = function (x, y) {
    return x + y;
}

// 함수를 호출한다(= 사용한다)
// 함수형() => add(입력값)
// console.log(add(2, 3));

let functionResult = add (3, 4);
console.log(functionResult);  // 7

// add2를 가지고 10과 20을 더한 값을 출력해보세요!
let functionResult2 = add2(10, 20);
console.log(functionResult2); // 30