// 배열

// 1. 생성
// 1-1, 기본 생성
// let fruits = ["사과", "바나나", "오렌지"];


// 1-2. 크기 지정
// let number = new Array(5);

// console.log(fruits.length);
// console.log(number.length);

// 2. 배열 요소 접근
// console.log(fruits[1])


// 3. 배열 메소드
// 3-1. push
// let fruits = ["사과", "바나나"];
// console.log("1 =>", fruits); // 사과, 나나

// fruits.push("오렌지")
// console.log("2 =>", fruits); // 사과, 바나나, 오렌지

// // 3-2. pop 메소드 (뒤에서 부터 없어짐)
// fruits.pop();
// console.log("3 =>", fruits); // 사과, 바나나

// 3-3. shift (앞에서 부터 없어짐)
let fruits = ["사과", "바나나", "키위"]
// console.log("1 =>", fruits);
// fruits.shift();
// console.log("2 =>", fruits);

// // 3-4. unshift (맨 앞에 어떤 값을 대신 들어감)
// fruits.unshift("포도");
// console.log("3 =>", fruits);

// // 3-5. splice
// fruits.splice(1, 1, "포도"); // index(1번째) 부터 몇개(1)지우고, (이거)넣어줘
// console.log(fruits) // ["사과",. "포도", "키위"]

// 3-6. slice
let slicedFruits = fruits.slice(0, 2); //index(1번째)부터 index(2번째전까지 잘라
console.log(slicedFruits); // ["사과". "바나나"]

//  (1) forEach, map, filter, find
let numbers = [3, 1, 2, 5, 4];

// 매개변수 자리에 함수를 넣는 것 : 콜백 함수
// numbers.forEach(function(item){
//     console.log("item입니다 =>" + item); //item입니다 =>3
//                                         // item입니다 =>1
//                                         // item입니다 =>2
//                                         // item입니다 =>5
//                                         // item입니다 =>4
// });

// (2) map //return문을 꼭 가져야 함.
// map 역할 : 기존에 있었던 배열을 가공해서, 새로운 배열을 생산해 let냄
// 항상 원본 배열의 길이만큼이 무조건, return 된다.
// let newNumbers = numbers.map(function(item){
//     return item * 2;
// })
// console.log(newNumbers) // [6, 2, 4, 10, 8]


// filter 조건에 해당하는 것만 return
let filteredNumbers = numbers.filter(function(item){
    return item > 3
});
console.log("=>", filteredNumbers);

// find // 찾은 첫번째 꺼만 return함.
// let numbers= [4, 1, 5, 3, 5];
// let result = numbers.find(function(item){
//     return item > 3
// })
// console.log(result)