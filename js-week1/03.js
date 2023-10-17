// 2. 문자 : stirng(문자열 = 문자의 나열)
// ' ' = " "
let str = "hello world!";
console.log(str);
console.log(typeof str);

// 2-1. 문자열 길이 확인하기
console.log(str.length); // 13

// 2-2. 문자열 결합하기
let str1 = "hello ";
let str2 = "world!";
let result = str1.concat(str2);
console.log(result); // "Hello, World!"

// 2-3. 문자열 자르기
let str3 = "hello, world!";
console.log(str3.substr(7, 5)); // "World" 7뒤부터 5글자
console.log(str3.slice(7, 12)); // "World" 7뒤부터 12번쨰까지

// 2-4. 문자열 검색
let str4 = "hello, world!";
console.log(str4.search("world")); // 7

// 2.5. 문자열 대체
let str5 = "hello, world!";
let result01 = str5.replace("world", "javascript");
console.log(result01) // "hello, javascript"

// 2-6. 문자열 분할
let str6 = "apple, banana, kiwi";
let result02 = str6.split(",");
console.log(result02); // ["apple", "banana", "kiwi"]