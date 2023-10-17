// 구조분배할당 : destructuring(de + structure + ing)
// de = not
// structure : 구조
// 배열이나, 객체의 속성

// (1) 배열의 경우
let [value1, value2] = [1, "new"];
console.log("1", value1)
console.log("2", value2)
let arr = ["value1", "value2", "value3", "value4"];
let [a, b, c, d = 4(초깃값)] = arr;

console.log(a)
console.log(b)
console.log(c)
console.log(d)

// (2) 객체인 경우
let user = {
    name: "nbc",
    age: 30,

};

// 구조분해할당
let { name, age } = {
    name: "nbc",
    age: 30,
}

console.log("name =>", name); // string
console.log("age =>", age);

// 새로운 이름으로 할당
let { name: newName, age: newAge } = user;
console.log(name, age) // ReferenceError: name is not defined
console.log(newName, newAge) //nbc 30

let { name, age, birthDay } = user;
console.log(birthDay) // undefined

let { name, age, birthDay = "today" } = user;
console.log(birthDay) // today