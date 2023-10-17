//  단축 속성명 : property, shortyand
// const name = "nbc";
// const age = "30";

// // key - value
// const obj = {name, age};
// const obj1 = {name: name, age: age};

// // 전개 구문  = spread open
// //destructureing과 함께 가장 많이 사용하는 es6 문법 중 하나
// let arr = [1, 2, 3]

// let newArr = [...arr, 4];
// console.log(arr);
// console.log(newArr);


// 예제
// let user = {
//     name: 'nbc',
//     age: 30,
// };

// let user2 = {...user};

// console.log(user);
// console.log(user2);

// 나머지 매개변수 (rest parameter)
function exampleFunc(a, b, c, ...args) {
    console.log(a, b, c)
    console.log(args)
}

// exampleFunc(1, 2, 3, 4, 5, 6, 7);

// 템플릿 리터럴(templet literal)
const testValue = "안녕하세요";
console.log(`Hello World ${testValue}`)
console.log(
    `Hello
        my name is javascript!!
        Nice to meet you!`
)