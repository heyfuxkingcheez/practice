// 배열

// 1. 생성
// 1-1, 기본 생성
let wook = ["개발", "자전거", "주식"];


// 1-2. 크기 지정
let number = new Array(5);

console.log(wook.length);
console.log(number.length);

// 2. 배열 요소 접근
console.log(wook[1])


// 3. 배열 메소드
// 3-1. push
let fruits1 = ["사과", "바나나"];
console.log("1 =>", fruits1); // 사과, 나나

fruits1.push("오렌지")
console.log("2 =>", fruits1); // 사과, 바나나, 오렌지

// // 3-2. [pop] 메소드 (뒤에서 부터 없어짐)
fruits1.pop();
console.log("3 =>", fruits1); // 사과, 바나나

// 3-3. [shift] (앞에서 부터 없어짐)
let fruits2 = ["사과", "바나나", "키위"]
console.log("1 =>", fruits2);
fruits2.shift();
console.log("2 =>", fruits2);

// // 3-4. [unshift] (맨 앞에 어떤 값을 대신 들어감)
fruits2.unshift("포도");
console.log("3 =>", fruits2);

// // 3-5. splice
fruits2.splice(2, 1, "포도"); // index(2)번째 부터 몇개(1)지우고, (이거)넣어줘
console.log("splice->",fruits2) // ["사과",. "바나나", "포도"]

// 3-6. slice
let slicedFruits = fruits2.slice(0, 2); // [앞 포함], [뒤 포함안함]
console.log(slicedFruits); // ["사과". "바나나"]

//  (1) forEach, map, filter, find
let numbers = [3, 1, 2, 5, 4];

// 매개변수 자리에 함수를 넣는 것 : [콜백 함수]
numbers.forEach(function(item){
    console.log("numbers =>" + item); //item입니다 =>3
                                        // item입니다 =>1
                                        // item입니다 =>2
                                        // item입니다 =>5
                                        // item입니다 =>4
});

// (2) map //return문을 꼭 가져야 함.
// map 역할 : 기존에 있었던 배열을 가공해서, 새로운 배열을 생산해 let냄
// 항상 원본 배열의 길이만큼이 무조건, return 된다.
let newNumbers = numbers.map(function(item){
    return item * 2;
})
console.log(newNumbers) // [6, 2, 4, 10, 8]


// filter 조건에 해당하는 것만 return
let filteredNumbers = numbers.filter(function(item){
    return item > 3
});
console.log("=>", filteredNumbers); // 5 4

// find // 찾은 첫번째 꺼만 return함.
let numbers1= [4, 1, 5, 3, 5];
let result = numbers1.find(function(item){
    return item > 3
})
console.log(result) // 4

// every() 메소드
let numbers = [2, 4, 6, 8, 10];

let isAllEvenNumbers = numbers.every(function(number) {
    return number % 2 === 0;
});

console.log(isAllEvenNumbers); // true
// 메소드를 사용하여 배열 numbers의 모든 요소가 짝수인지 확인합니다.
// every() 메소드는 배열이 각 요소에 대해 콜백 함수를 실행하고
// 그 결과가 true인 요소가 모든 요소인지 확인합니다.

// sort() 메소드 => 배열의 요소를 정렬
let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

numbers.sort(function(a, b) {
    return a - b;
})

console.log(numbers); // [1, 1, 2, 3, 3, 4, 5 ,5, 5, 6, 9]
// 배열 numbers를 오름차순으로 정렬한다.

// revers() 메소드
let numbers = [1, 2, 3, 4, 5];

numbers.reverse();

console.log(numbers); // [5, 4, 3, 2, 1]
// 배열 numbers의 순서를 뒤집는다.