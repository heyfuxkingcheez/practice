// for, while => ~동안 : 반복문
// for (초기값, 조건식, 증감식){
// }

// i라는 변수는 0부터 시작할거야
// i라는 변수가 10에 도달할 때 까지 계속할거야
// i라는 변수는 한 사이클이 돌고 나면 1을 더할거야.
// for(let i = 0; i < 10; i++) {
//     console.log("for문 돌아가고 있음 =>" + i);
// }

// 배열과 for문은 짝꿍이다.
// const arr = ["one","two","three","four","five"];
// for (let i = 0; i < arr.length; i++) {
//     console.log(i)
//     console.log(arr[i]); // one, two, three, four, five

// }

// ex : 0부터 10까지의 수 중에서 2의 배수만 console.log로 출력
// let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr = [];

// for (let i = 0; i < number.length; i++) {
//     if (i >= 2) {
//         if (i % 2 === 0) {
//             console.log(i + "는 2의 배수입니다.")
//         }
//     }
// }

// for ~ in문
// 객체의 속성을 출력하는 문법
// let person = {
//     name: "john",
//     age: 30,
//     gender: "male",

// };

// for (let key in person) {
//     console.log(key + ":" + person[key]);
// }

// while 
// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i++;    
// }

// while문을 활용해서, 3초과 100미만의 숫자 중 5의 배수만 출력하는 예
// let i = 4;

// while (i < 100) {
//     if (i % 5 == 0) {
//         console.log(i + "는 5의 배수 입니다.")
//     }
//     i++;
// }

// do ~ while
// let i = 0;

// do {
//     console.log(i);
//     i++
// } while (i < 10);

// break continue문
// for(let i = 0; i < 10; i++) {
//     if (i == 6) {
//         break;
//     } console.log(i)
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 1) {
//         console.log(i)
//     }
// }
let i = 2;
while (i <= 100) {
    console.log(i)
    i += 2
}