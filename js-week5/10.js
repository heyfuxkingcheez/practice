// [렉시컬 스코프]
// JS엔진은 함수를 어디서 "호출" 했는지가 아니라
// 어디에 "정의" 되었는지에 따라서 스코프(상위 스코프)를 결정한다.

// 외부 렉시컬 환경에 대한 참조값 => outer
// 함수의 정의가 평가되는 시점!!

// [클로저와 렉시컬 환경]
// 외부 함수보다 중접 함수가 더 오래 유지되는 경우, "중첩 함수"는
// 생명 주기가 "종료"한 외부 함수의 변수를 "여전히" 참조할 수 있다

const x = 1; // 전역scope

// outerFunc내에 innerFunc가 호출되고 있음에도 불구하고
function outerFunc() {
    const x = 10; // outer scope
    innerFunc(); // 1
}

// innerFunc와 outerFunc는 서로 다른 scope를 가지고 있다
function innerFunc() {
    console.log(x); // 1
}

outerFunc();