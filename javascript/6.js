let sumSquare = 0;
let squareSum = 0;
let j = 0;

for (var i = 0; i < 101; i++) {
  let square = i * i;
  sumSquare = sumSquare + square;
}

for (var i = 0; i < 101; i++) {
  j = j + i;
}

console.log(j * j - sumSquare);