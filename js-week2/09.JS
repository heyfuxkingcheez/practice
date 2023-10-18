const myMap = new Map();
myMap.set('one', 1);
myMap.set('two', 2);
myMap.set('three',3);

for (const key of myMap.keys()) {
    console.log("key =>",key) // one two three
}

console.log(myMap.values());
for (const value of myMap.values()) {
    console.log("value =>",value) // 1 2 3
}

console.log(myMap.entries());
for (const entry of myMap.entries()) {
    console.log("entry =>",entry); // 'one',1  'two',2  'three',3 
}

console.log(myMap.size); // map의 사이즈(길이) // 3
console.log(myMap.has("two")); //key 기반 검색 // true
