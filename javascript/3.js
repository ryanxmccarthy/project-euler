let originalTarget = 600851475143;
let target = originalTarget;
let i = 2;
while (i < target) {
  while (target % i === 0) {
    (function(newTarget) {
      target = newTarget;
    }) (target / i)
  }
  i++;
}
console.log(target);