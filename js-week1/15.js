// for문

// 1-1 기본적인 for 문
for (let i = 0; i < 10; i++) {
    console.log(i); // 0123456789
}

// 1-2 배열과 함께 사용하는 for문
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]); // 12345
}

// 1-3 for..in문
let person = { name: "wook", age: 30, gender: "male" };

for (let key in person) {
    console.log(key + ": " + person[key]); // name: wook age: 30 gender: male
}

// 2 while 문
let i = 0;

while (i < 10) {
    console.log(i); // 0123456789
    i++;
}

// 3 do...while문
// 선조치 후보고 느낌....

do {
    console.log(i); // 0123456789
    i++;
} while (i < 10);

// 4. break문과 continue문
// 4-1 break문
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i); // 01234 5만나면 튕겨 나옴...실행 ㄴㄴ
}

// 4-2 continue문
for (let i = 0; i < 10; i++) {
    if (i ===5) {
        continue;
    }
    console.log(i); // 01234 0123456789
    // 5에서 한번 튕겨나오고 continue가 다시 코드 진행시켜서 0~9
}



