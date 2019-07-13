const smallestMult = function(n) {
  const mults = [];
  for (let i = 1; i <= n; i++) {
    let newMult = i;
    mults.forEach(function(mult) {
      if (newMult % mult === 0) {
        newMult /= mult;
      }
    })
    mults.push(newMult);
  }
  return mults.reduce((product = 1, mult) => product *= mult);
}

console.log(smallestMult(20));