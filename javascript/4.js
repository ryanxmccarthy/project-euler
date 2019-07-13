let max = 0; 

function palindrome() {
  for (let i = 999; i > 99; i--) {
    for (let j = 999; j > 99; j--) {
      let product = i * j;
      let string = '' + product;
      if (string === string.split('').reverse().join('') && product > max) {
        max = product;
      }
    }
  }
  return max;
}
  
console.log(palindrome());