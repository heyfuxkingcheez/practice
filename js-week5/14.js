// 카운트 상태 변경 함수 #3
// 함수가 호출될 때마다 호출된 횟수를 누적하여 출력하는 카운터를 구현해요


// 카운트 상태 변경 함수
const increase = (function() {
    // 카운트 상태 변수
    let num = 0;

    // 클로저
    return function () {
        return ++num;
    }
})();
// 이전 상태값을 유지 못함,
console.log(increase());
// num =100; // 은 안됌
console.log(increase());
console.log(increase());

// [코드 설명]
// 1. 위 코드가 실행되면, '즉시 실행 함수'가 호출! -> 함수가 반환(inner) -> increase에 할당
// 2. increase변수에 할당된 함수는 자신이 정의된 위치에 의해서 결정된 상위 스코프인 즉시 실행 함수의
// '렉시컬 환경'을 기억하는 클로저 -> let num = 0; 을 기억한다.
// 3. 즉시 실행함수는 -> 즉시 소멸되죠!! (outer함수가 불리자마자 바로 call stack 에서 popup되는 것과 비슷)
// * 결론 : num은 초기화 x, 외부에서 접근할 수 없는 은닉된 값! 의도되지 않는 변경도 걱정할 필요 X
// -> increase에서만 변경할 수 있기 때문에..!
