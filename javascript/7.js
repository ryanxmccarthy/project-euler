function isPrime(n) {
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function nthPrime(n) {
  let count = 0, inc = 2;
  while (count < n) {
    if (isPrime(inc)) {
      count++;
    }
    inc++;
  }
  return inc - 1;
}

console.log(nthPrime(10001));