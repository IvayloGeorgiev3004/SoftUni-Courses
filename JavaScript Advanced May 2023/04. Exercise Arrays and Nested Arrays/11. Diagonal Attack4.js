function diagonalAttack(arrayOfStrings) {
  let numbersArr = arrayOfStrings.map((element) => element.split(" ").map(Number));
  let firstDiagonalSum = 0;
  let secondDiagonalSum = 0;
  let lastArrIndex = numbersArr[0].length - 1;

  for (let i = 0; i < numbersArr.length; i++) {
    firstDiagonalSum += numbersArr[i][i];
    secondDiagonalSum += numbersArr[i][lastArrIndex - i];
  }
  if (firstDiagonalSum !== secondDiagonalSum) {
    return numbersArr.forEach((element) => {
      console.log(element.join(" "));
    });
  }

  for (let i = 0; i < numbersArr.length; i++) {
    for (let j = 0; j < numbersArr.length; j++) {
      if (i !== j && j !== lastArrIndex - i) {
        numbersArr[i][j] = firstDiagonalSum;
      }
    }
  }

  numbersArr.forEach((element) => {
    console.log(element.join(" "));
  });
}
diagonalAttack(['5 3 12 3 1', 
'11 4 23 2 5', 
'101 12 3 21 10', 
'1 4 5 2 2', 
'5 22 33 11 1']);
