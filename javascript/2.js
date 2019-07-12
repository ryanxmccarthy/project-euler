let arr = [0, 1, 1, 2];
let i = 4;
let sum = 0;

while (arr[i-1] + arr[i-2] <= 4000000) {
  arr[i] = arr[i-1] + arr[i-2];
  i += 1;
}

for (var j in arr) {
  sum += arr[j];
}

console.log(sum);