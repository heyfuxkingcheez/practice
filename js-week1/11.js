// 조건문 ~ if, else if, else, switch
// 1. if문
let x = 10;

// 1-1
if (x > 0) {
    // main logic
    console.log("x는 양수입니다.")
}

// 1-2
let y = "hello world";

// y의 길이가 5보다 크거나 같으면 길이를 console.log로 출력
if (y.length >= 5) {
    console.log(y.length)
}

let z = -3;
// // 2. if - else문
if (z > 0) {
    //main logic #1
    console.log("z는 양수입니다.")
} else {
    //main logic #1
    console.log("z는 음수입니다.")
}

let a = -1;
// // if - else if - else 문
if (a < 0) {
    //main logic #1
    console.log("1")
} else if (a >= 0 && a < 10) {
    //main logic #1
    console.log("2")
} else {
    //main logic #1
    console.log("3")
}

// 1-4. switch문
// 변수의 값에 따라, 여러 개의 경우(case) 중 하나를 선택
// default
let fruit = "사과";

switch (fruit) {
    case "사과":
        console.log("사과 입니다.");
        break;
    case "바나나":
        console.log("바나나 입니다.");
        break;
    case "키위":
        console.log("키위 입니다.");
        break;
    default:
        console.log("아무것도 아닙니다.");
        break;
}

