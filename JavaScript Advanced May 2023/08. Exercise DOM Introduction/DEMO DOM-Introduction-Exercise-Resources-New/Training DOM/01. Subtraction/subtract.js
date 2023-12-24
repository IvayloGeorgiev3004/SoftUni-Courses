function subtract() {
  // GET THE NEEDED ELEMENTS
  let firstNum = document.getElementById("firstNumber").value;
  let secondNum = document.getElementById("secondNumber").value;

  //CONVERT THE VALUES TO NUMBERS
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);
  //MAKE THE CALCULATIONS
  let result = firstNum - secondNum;
  //APPEND THE RESULT
  document.getElementById("result").textContent = result;
}
