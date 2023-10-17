// Map
// Map, Set 추가적인 자료구조가 등장...

// Map, Set의 목적 : 데이터의 구성, 검색, 사용을 효율적으로 처리 -> 기존의 객체 or 배열 보다 더

// (1) Map
// -key / Value
// -Key에 어떤 데이터타입(유형)도 다 들어올 수 있다.
// -Map은 키가 정렬된 순서로 저장되기 때문이다.
// -기능
// >검색, 삭제, 제거, 여부 확인

const myMap = new Map();
myMap.set('key', 'value');

//...
//...

myMap.get('key')
// 반복... !! -> method : kets, values, entries