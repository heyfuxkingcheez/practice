// 런타임(runtime)?
// 프로그램이 실행되는 동안의 시점 <-> 컴파일 시점

// 일급 객체?
// 함수를 일반 값과 마찬가지로 변수에 할당, 함수의 인자로 전달, 함수의 반환값으로 사용
// 재사용성 높임

// 비동기 처리?
// 작업을 병렬로 처리할 수 있는 방식

// 변수, 상수
// 메모리에 저장한다. 읽어들여서 재사용한다. -> 변수

// 변수의 5가지 주요 개념

// 변수 이름 : 지정된 값의 고유 이름
// 변수 값 : 변수에 저장된 값
// 변수 할당 : 변수에 값을 지정하는 행위
// 변수 선언 : 변수를 사용하기 위해 컴퓨터에 알리는 행위
// 변수 참조 : 변수에 할당된 값을 읽어오는 것

// 변수를 선언할 수 있는 3가지 방법 : var, let, const
// 1. var // 마지막에 선언한 값으로 변수가 덮어씌어짐.
var myVar = "hello world!"; 
var myVar = "Test 1";
myVar = "GoodBye";
console.log(myVar)

// 2. let // 변수 두번 선언x,  값 변경 o
let myLet = "hello world!";
// let myLet = "Test 2";
myLet = "GoodBye1";
console.log(myLet)

// 3. const // 변수 두번 선언x, 선언 후에 값 변경 x
const myConst = "hello world!";
// const myConst = "Test 3";
myConst = "GoodBye2";


console.log(myConst)