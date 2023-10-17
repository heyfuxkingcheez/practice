// Set
// -고유한 값을 가지는 자료구조
// -value만 저장한다
// -key를 저장하진 않는다
// -value가 중복되지 않는 유일한 요소로만 구성된다.
// 값 추가, 검색, 값 삭제, 모든 값 제거, 존재 여부 확인

// 집합과 비슷한 성격이라고 생각하고 이해하면 됨
// const mySet = new Set();
// mySet.add('value1');
// mySet.add('value2');
// mySet.add('value3');
// mySet.add('value4');
// mySet.add('value5');

// console.log(mySet.size)
// console.log(mySet.has("value1"));
// console.log(mySet.has("value2"));
// console.log(mySet.has("value3"));

// // iterator, 반복했던 그 친구
// for (const value of mySet.values()) {
//     console.log(value);
// }


function solution(strings, n) {
    let result = [];
    for (let i = 0; i <strings.length; i++) {
        strings[i] = strings[i][n] + strings[i];
        
    }
    console.log(strings)

    strings.sort();
    console.log(strings)

    for (let j = 0; j < strings.length; j++) {
        strings[j] = strings[j].replace(strings[j][0], "");
        result.push(strings[j]);
    }
    console.log(strings)
    console.log(result)
};

solution(["abce", "abcd", "cdx"], 2)