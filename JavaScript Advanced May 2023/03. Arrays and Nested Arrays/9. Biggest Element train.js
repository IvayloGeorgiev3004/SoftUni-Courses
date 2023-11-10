function biggestElement(matrix) {
  let currMax = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < matrix.length; i++) {
    matrix[i].forEach((element) => {
      if (element > currMax) {
        currMax = element;
      }
    });
  }
  return currMax;
}
console.log(
  biggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4],
  ])
);
