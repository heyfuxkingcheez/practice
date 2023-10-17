// 스코프
// 지역 스코프(local scope)
function printX() {
    let x = 10;
    console.log(x);
}

console.log(x);
printX(); // 

// 블록 스코프(block scope)
if (true) {
    let x = 10;
    console.log(x);
}
console.log(x); // ReferenceError : is not defined
// if문 내에서 선언된 변수는 해당 블록 내에서만 참조할 수 있음.



