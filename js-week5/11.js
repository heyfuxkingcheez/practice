const x = 1;

// 1
function outer () {
    const x = 10;
    const inner = function () {
        console.log(x);
    };
    return inner;

}

// outer함수를 '실행'해서 innerFunc에 담죠
// outer함수의 return부분을 innerFunc에 담는다는 얘기
const innerFunc = outer();
// ------ 여기서는 outer함수의 실행
innerFunc();

// 어떻게 가능할까요?? (feat 똑똑한 가비지 컬렉터)
// 안쓰는 것만 들고간다. 
// outer 함수의 렉시컬 환경은 참조하는 곳이 있으니 놔둠