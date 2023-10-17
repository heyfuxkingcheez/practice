var arr = [3, 5, 6, 1, 2, 4];
var max = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
        console.log("최댓값은", max)

    }
    return max;
}
