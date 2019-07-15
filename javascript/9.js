for (let i = 0; i < 999; i++) {
  for (let j = 0; j < 999; j++) {
    var c = (i**2) + (j**2);

    if((i + j + (c**0.5) === 1000) && i<j && j < (c**0.5) && ((i**2)+(j**2)===c)){
    console.log('The value of a is ' + i + '. The value of b is '+j + '. The value of c is ' + (c**0.5))
    console.log('The product of a*b*c= ' + i*j*(c**0.5))
    }
  }
}