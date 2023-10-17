// 무슨 제어권? 2번째
// 인자에 대한 제어권을 갖는다.
// map 함수입니다. -> 배열에 대한 수정 후 새로운 배열을 만드는 메서드

//index : 사람이 이해할 수 있는 변수명일 뿐
//currentValue : 사람이 이해할 수 있는 변수명일 뿐
// map(function (element, index)순서로 옴 제어권은 map에게 있음.)
var newArr = [10, 20, 30].map(function (index, currentValue) {
    console.log(index, currentValue)
    return currentValue + 5;
});

// 결과는 뭐가 될까? map은 리턴을 추가 해주지 않으면 undefined로 뜬다.
console.log(newArr);