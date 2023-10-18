// Map
// Map, Set 추가적인 자료구조가 등장...

// Map, Set의 목적 : 데이터의 구성, 검색, 사용을 효율적으로 처리 -> 기존의 객체 or 배열 보다 더

// (1) Map
// -key / Value
// -Key에 어떤 데이터타입(유형)도 다 들어올 수 있다.
// -Map은 키가 정렬된 순서로 저장되기 때문이다.

// -기능
// 키-값 쌍 추가 및 검색(set)
// 키-값 쌍 삭제(delete)
// 모든 키-값 쌍 제거(clear)
// Map 크기 및 존재 여부 확인(size)

// 새로운 Map 만드려면 Map() 생성자를 사용
const myMap = new Map();

// Map에 값을 추가하려면 set() 메소드를 사용
myMap.set('key', 'value');

//...
//...
// Map에서 값을 검색하려면 get() 메소드를 사용
myMap.get('key')
// 반복... !! -> method : kets, values, entries