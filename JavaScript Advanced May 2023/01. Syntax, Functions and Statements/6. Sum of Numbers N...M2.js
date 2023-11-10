function sumNumbers(numN, numM) {
  let num1 = Number(numN);
  let num2 = Number(numM);
  let sum = 0;

  for (let i = num1; i <= num2; i++) {
    sum += i;
  }
  return sum;
}
sumNumbers("-8", "20");
