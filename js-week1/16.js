// 객체
// key - value pair
// 하나의 변수에 여러개의 값을 넣을 수 있다.

// 1. 객체 생성 방법
// 1-1. 기본적인 객체 생성 방법
let person = {
    name: "홍길동",
    age: 30,
    gender: "남자",
};

// 1-2. 생성자 함수를 이용한 객체 생성 방법
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

// let person1 = new Person("홍길동", 30, "남자");
// let person2 = new Person("홍길순", 28, "여자");

// 2. 접근하는 방법
console.log("1.",person.name) // 홍길동
console.log("2.",person.age) // 30
console.log("3.",person.gender) //남성

// 객체 메소드(객체가 가진 여러가지 기능 :Object.~~)
// 3-1. Objecct.key() : key를 가져오는 메소드.


let keys = Object.keys(person);
// console.log("keys =>", keys); // ["name", "age", "gender"]

// 3-2. Object.value() : value를 가져오는 메소드.
let values = Object.values(person)
// console.log("values =>", values); // ["홍길동", 30, "남자"]

// 3-3. entrries
// key의 value를 묶어 배열로 만든 배열! (2차원 배열)
let entries = Object.entries(person);
console.log("entries =>", entries); // [ [ 'name', '홍길동' ], [ 'age', 30 ], [ 'gender', '남자' ] ]
// 3-4. assign
// 객체 복사
let newPerson = Object.assign({}, person, { age: 35 });

console.log("newPerson ->", newPerson); // { name: '홍길동', age: 35, gender: '남자' }

// 3-5. 객체 비교
    let 기욱 = {
        name: "정기욱",
        age: 27,
        gender: "male"
    };
    let 기욱2 = {
        name: "정기욱",
        age: 27,
        gneder: "male"
    };
console.log("answer =>", 기욱 === 기욱2);// false
console.log("answer =>", JSON.stringify(기욱) === JSON.stringify(기욱2)) // true

// 3-6. 객체 병합
let person1 = {
    name: "홍길동",
    age: 30,
};
let person2 = {
    gender: "남자",
};

// ... : spread operator (전개 연산자)
let perfectMan = {...person1, ...person2};
console.log("answer=>",perfectMan)
