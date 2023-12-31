// 배열의 요소로 함수를 할당
// 함수는 배열의 요소로 할당될 수 있다.
// 이것은 함수를 배열에서 사용할 수 있게 한다.

const myArr = [
    function (a, b) {
        return a + b;
    },// 0번째 요소
    function (a, b) {
        return a - b;
    },// 1번째 요소
];

// 더하기
console.log(myArr[0](1, 3)); // 4

// 빼기
console.log(myArr[1](10, 7)); // 3

// 함수가 일급 객체로 취급되기 떄문에, js에서 함수는 매우 유연하게 사용가능
// 일급 객체로 다룰 수 있다는 것은, 코드를 간결하고 모듈화된 형태로 사용

// 새로운 함수를 반환하는 함수를 작성하면, 함수를 조합하여 더 복잡한 기능을 구현
// 코드를 더욱 간결하게 작성할 수 있으며, 유지보수 쉬워짐



