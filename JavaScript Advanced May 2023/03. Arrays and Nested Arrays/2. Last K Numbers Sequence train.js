function lastKNumbers(sequenceLength, numberK) {
  let arr = [1];

  for (let i = 1; i < sequenceLength; i++) {
    let sum = 0;
    let index = Math.max(0, i - numberK);
    for (let j = index; j < arr.length; j++) {
      sum += arr[j];
    }
    arr.push(sum);
  }
  return arr;
}
lastKNumbers(6, 3);
