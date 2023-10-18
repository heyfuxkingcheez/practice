function multiplyBy(num) {
    return function (x) {
        return x * num;
    };
}

function add(x, y) {
    return x + y;
}

const multiplyByTwo = multiplyBy(2); 
// == function (x) {
//     return x * 2;
// };


const multiplyByThree = multiplyBy(3);
// == function (x) {
//     return x * 3;
// };

console.log(multiplyByTwo(5)); // 10
console.log(multiplyByThree(10)); // 30

const result = add(multiplyByTwo(5), multiplyByThree(10)); // 40
console.log(`final =>${result}`)