let arr = [];

for (var i = 3; i < 1000; i++) {
  if (i % 3 === 0) {
    arr.push(i);
  } else if (i % 5 === 0) {
    arr.push(i);
  }
}

const arrSum = arr => arr.reduce((a,b) => a + b, 0)

console.log(arrSum(arr));