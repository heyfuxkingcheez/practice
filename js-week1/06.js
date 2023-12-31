// 연산자 (+, -, *, /, %)

// 1. 더하기 연산자
console.log(1 + 1); // 2
console.log(1 + "1"); // 11

// 2. 빼기 연산자
console.log(1 - "2"); // -1
console.log(1 - 2); // -1


// 3. 곱하기 연산자(*)
console.log(2 * 3); // 6
console.log("2" * 3); // 6

// 4. 나누기 연산자(/)
console.log(4 / 2); // 2
console.log("4" / 2); // 2

// 5. 나누기 연산자(/) vs 나머지 연산자(%)
console.log(5 / 2); // 2.5
console.log(5 % 2); // 1

// 6. 할당 연산자
// 6-1. 등호 연산자(=)
let x = 10;
console.log(x) // 10

// // 6-2. 더하기 등호 연산자(+=)
x += 10;
console.log(x) // 20

// // 6-3. 빼기 등호 연산자(-=)
x -= 30;
console.log(x); // -10

// 6-4 곱하기 등호 연산자.
let a = 10;
a *= 2;
console.log(a); // 20

// 6-5 나누기 등호 연산자(/=)
a /= 2
console.log(a); // 10

// 6-6 나머지 등호 연산자(%=)
a %= 3
console.log(a); // 1

// 비교 연산자 (<, >)
// 1. 일치연산자(===)
// type까지 일치해야 true를 변환하는 연산자
console.log(2 === 2); // true
console.log("2" === 2); // false
console.log(2 === "2"); // false

// 2. 불일치 연산자(!==)
// 타입까지 일치해야 false를 변환하는 연산자
console.log(2 !== 2); // false
console.log("2" !== 2); // true
console.log(2 !== "2"); // true

// 3. 작다 연산자(<), 작거나 같다 연산자(<=)
console.log("-------");
console.log(2 < 3); // true
console.log(2 <= 3); // true
console.log(3 <= 3) // true
console.log(4 <= 3); // false

// 4. 논리 연산자 (t/f)
// 4-1. 논리곱 연산자 : 모두 true 일 때 true 반환 (and)
console.log("---and----")
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false);  // false

// 4-2. 논리합 연산자 : 둘 값 중 하나라도  true 인 경우 true 반환 (or)
console.log("---or----")
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// 4-3. 논리부정 연산자 => 1
console.log("------");
console.log(!true);
let b = true;
console.log(!b);

// 5. 삼항 연산자(중요!)
// 조건에 따라 값을 선택한다.
let y = 10;
let result = (y > 5) ? "크다" : "작다"; // (조건) ? "true" : "false"
console.log("------");
console.log(result);
console.log("------")

let z = 20;
// 3항연산자를 이용해서 y가 
// 10보다 작은 경우 작다를 console.log 로 출력
// 10보다 클 경우 크다를 console.log로 출력
let answer = (z > 10) ? "큰거맞음" : "작은거맞음";
// let answer1 = (y < 10) ? "작다" : "크다";

