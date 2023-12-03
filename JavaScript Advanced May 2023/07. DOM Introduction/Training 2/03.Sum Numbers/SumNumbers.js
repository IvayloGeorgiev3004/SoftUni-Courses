function calc() {
  let firstNumberElement = document.getElementById("num1"); // get the element by id
  let secondNumberElement = document.getElementById("num2"); // get the element by id

  let firstNumber = firstNumberElement.value; // get the value using .value (returns string)
  let secondNumber = secondNumberElement.value; // get the value using .value (returns string)

  let num1 = Number(firstNumber);
  let num2 = Number(secondNumber);
  let sum = num1 + num2;

  document.getElementById("sum").value = sum // get the element by id and its value property by using .value (returns string) and add the new value
}
