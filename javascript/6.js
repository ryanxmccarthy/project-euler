let j = 0;
let k = 0;

for (var i = 0; i < 101; i++) {
  let square = i * i;
  j = j + square;
}

for (var i = 0; i < 101; i++) {
  k = k + i;
}

console.log(k * k - j);