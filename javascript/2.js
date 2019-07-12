const sum = () => {
  let previous = 0;
  let current = 1;
  let result = 0;

  for (let i = 0; ; i++) {
    const next = previous + current;
    if (next > 4000000) {
      break;
    }
    if (next % 2 === 0) {
      result += next;
    }
    previous = current;
    current = next;
  }

  console.log(result);
}

sum();